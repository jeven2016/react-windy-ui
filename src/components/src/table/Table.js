import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import getScrollbarWidth, {
  contains,
  convertToArray,
  invoke,
  isNil, isNumber,
  validate,
} from '../Utils';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import useInternalState from '../common/useInternalState';
import {initStore} from '../common/Store';
import {checkScrollBar, filterLeaves, SortOrder} from './TableUtils';
import BodyCell from './BodyCell';
import TableHead from './TableHead';

const Type = {
  normal: 'normal',
  responsive: 'responsive',
  striped: 'striped',
  simple: 'simple',
};

const CheckType = {
  checkbox: 'checkbox',
  radio: 'radio',
};

const SortComparator = (a, b) => a === b ? 0 : (a < b ? 1 : -1); //by desc

const FilterComparator = (filteredValues, row, cell) => {
  for (let value of filteredValues) {
    if (row[cell.showParam].toString().includes(value.toString())) {
      return true;
    }
  }
  return false;
};

const Table = React.forwardRef((props, ref) => {
  const {
    instanceRef,
    extraClassName,
    className = 'table',
    children,
    type = Type.normal,
    hover = false,
    hasBorder = true,
    loadData,
    cells,
    hasBox = false,

    checkable = false,
    checkType = CheckType.checkbox,
    canCheckAll = checkType === CheckType.checkbox,
    onCheckChange,
    onCheckAll,
    defaultCheckedRows,
    checkedRows,
    highlightCheckedRow = true,

    defaultSortComparator = SortComparator,
    defaultSortOrder = SortOrder.desc,
    onSort,
    sortOrder, //format: {key: key, order: 'asc'}

    //for filter
    defaultOkText = 'OK',
    defaultResetText = 'Reset',
    defaultFilterComparator = FilterComparator,
    filteredItems, //[value]
    onFilter,

    scrollY = false,
    bodyHeight = 250, //number

    scrollX = false,
    bodyWidth, //number

    ...otherProps
  } = props;
  const isLoadDataDefined = !isNil(loadData);
  const isCellsDefined = !isNil(cells);
  const isJsonData = isLoadDataDefined || isCellsDefined;
  if (isJsonData) {
    validate(isLoadDataDefined, 'the loadData should be provided');
    validate(isCellsDefined, 'the cells should be provided');
  }

  const {state: checkedRowKeys, setState: setChecked, customized: customCheck}
      = useInternalState({
    props,
    stateName: 'checkedRows',
    defaultState: convertToArray(defaultCheckedRows),
    state: convertToArray(checkedRows),
  });

  //a reference to popup so that we can close the popup by calling the instance's method
  const popupRef = useRef(null);

  //The sort details of the columns, {key: paramName, order: asc/desc, sorter: (data)=>{...]}
  const [sortedState, setSortedState] = useState();

  //active the filter popup, the format is {key: paramName}, only one filter popup can display at same time
  const [activeFilter, setActiveFilter] = useState(null);

  //[{filterValue: v, fc}}], fc means filterComparator
  const [filterParams, setFilterParams] = useState([]);

  //init a internal store
  //{ checkedValues: {key: [values]} , the key corresponds the showParam
  const [store] = useState(initStore({
    checkedValues: {},
  }));

  const scrollHeadRef = useRef();
  const scrollBodyRef = useRef();
  const scrollBarWidthRef = useRef(getScrollbarWidth());

  useImperativeHandle(instanceRef, () => ({
    clearSort: () => {
      setSortedState(null);
    },
    clearFilter: () => {
      setActiveFilter(null);
      setFilterParams([]);
      store.setState({checkedValues: {}});
    },
    clearAll: () => {
      instanceRef.current.clearSort();
      instanceRef.current.clearFilter();
    },
  }), [instanceRef, store]);

  //for cells definition
  const cellsData = useMemo(() => convertToArray(cells), [cells]);

  //the table data
  const rowData = useMemo(() => {
    var data = convertToArray(loadData);
    if (sortedState) {
      data = sortedState.sorter(data);
    }
    if (filterParams.length > 0) {
      filterParams.forEach(param => {
        data = data.filter(param.fc);
      });
    }
    return [...data];
  }, [filterParams, loadData, sortedState]);

  const isCheckbox = checkType === CheckType.checkbox;

  const head = <TableHead cells={cells}
                          customCheck={customCheck}
                          setChecked={setChecked}
                          checkable={checkable}
                          canCheckAll={canCheckAll}
                          isCheckbox={isCheckbox}
                          rowData={rowData}
                          cellsData={cellsData}
                          checkedRowKeys={checkedRowKeys}
                          checkedRows={checkedRows}
                          onCheckAll={onCheckAll}
                          defaultSortComparator={defaultSortComparator}
                          defaultSortOrder={defaultSortOrder}
                          sortOrder={sortOrder}
                          sortedState={sortedState}
                          setSortedState={setSortedState}
                          onSort={onSort}
                          scrollHeadRef={scrollHeadRef}
                          activeFilter={activeFilter}
                          setFilterParams={setFilterParams}
                          filterParams={filterParams}
                          setActiveFilter={setActiveFilter}
                          store={store}
                          defaultOkText={defaultOkText}
                          defaultResetText={defaultResetText}
                          defaultFilterComparator={defaultFilterComparator}
                          popupRef={popupRef}
                          scrollY={scrollY}
                          scrollBarWidthRef={scrollBarWidthRef}
                          onCheckChange={onCheckChange}/>;

  const fixedHead = useMemo(() => {
    return head;
  }, [head]);

  const getHead = useCallback(() => {
    if (scrollY) {
      return fixedHead;
    }
    return head;
  }, [scrollY, fixedHead, head]);

  const checkOneHandler = useCallback((row, nextCheck, e) => {
    if (!customCheck) {
      if (nextCheck) {
        if (isCheckbox) {
          setChecked(pre => [...pre.filter(k => k !== row.key), row.key]);
        } else {
          setChecked(pre => [row.key]);
        }
      } else {
        if (isCheckbox) {
          setChecked(pre => [...pre.filter(k => k !== row.key)]);
        } else {
          setChecked(pre => []);
        }
      }
    }
    onCheckChange && onCheckChange(row, nextCheck, e);
  }, [customCheck, isCheckbox, onCheckChange, setChecked]);

  const getCheckForRow = useCallback((row, isRowChecked) => {
    if (checkable) {
      function checkRow(value, e) {
        checkOneHandler(row, value, e);
      }

      return <td className="cell-check">
        {isCheckbox ? <Checkbox checked={isRowChecked} onChange={checkRow}/>
            : <Radio value={true} checked={isRowChecked} onChange={checkRow}/>}
      </td>;
    }
    return null;
  }, [checkOneHandler, checkable, isCheckbox]);

  const body = useMemo(() => {
    const realCellsData = filterLeaves(cellsData);
    return <tbody>
    {
      rowData.map((row, index) => {
        const isRowChecked = contains(row.key, checkedRowKeys);
        const selectTd = getCheckForRow(row, isRowChecked);
        const trClsName = clsx({
          'hl-tr': checkable && isRowChecked && highlightCheckedRow,
        });

        return <tr className={trClsName} key={row.key}>
          {selectTd}
          {
            realCellsData.map((cell, i) => {
              let content = row[cell.showParam];
              if (cell.format) {
                content = invoke(cell.format, content, row, index);
              }
              return <BodyCell key={row.key + '-' + i}
                               scrollHeadRef={scrollHeadRef} store={store}
                               cell={cell} tdKey={row.key + '-' + i}
                               content={content}/>;
            })
          }
        </tr>;
      })
    }
    </tbody>;
  }, [
    cellsData,
    checkable,
    checkedRowKeys,
    getCheckForRow,
    highlightCheckedRow,
    rowData,
    store]);

  const getColGroups = useCallback((isHead) => {
    let leaves = [];
    for (let cell of cellsData) {
      let nodes = [cell];
      while (nodes.length > 0) {
        const node = nodes.shift();
        if (isNil(node.children)) {
          leaves.push(node);
        } else {
          nodes = nodes.concat(node.children);
        }
      }
    }

    //todo
    if (!isNil(bodyWidth)) {
      let totalWidth = 0;
      const leafInfoArray = [];
      leaves.forEach((leaf, i) => {
        if (isNumber(leaf.width)) {
          totalWidth += parseInt(leaf.width);
        } else {
          leafInfoArray.push({position: i});
        }
      });

      const size = leafInfoArray.length;
      const leftWidth = bodyWidth - totalWidth;
      const leftThWidth = size > 0 ? Math.floor(leftWidth / size) : -1;

      leafInfoArray.forEach(info => {
        if (leftThWidth > 0) {
          // leaves[info.position].width = leftThWidth;
        }
      });

    }
    var cols = leaves.map((c, index) => <col key={c.width + '-' + index}
                                             style={{
                                               width: isNumber(c.width)
                                                   ? c.width + 'px'
                                                   : c.width,
                                             }}/>);

    if (scrollY && isHead) {
      cols.push(<col key="scroll-y-col"
                     style={{width: scrollBarWidthRef.current}}/>);
    }
    return <>
      <colgroup>
        {checkable && <col className="col-check"/>}
        {cols}
      </colgroup>
    </>;
  }, [bodyWidth, cellsData, checkable, scrollY]);

  const clsName = clsx(extraClassName, className, type, {
    'hover': hover,
    'clear-border': !hasBorder,
    'global-with-box': hasBox,
  });

  //scroll the body and make sure the head scroll as well as same distance
  const doScrollX = useCallback((e) => {
    scrollHeadRef.current.scrollLeft = e.target.scrollLeft;
    store.setState(checkScrollBar(scrollHeadRef));
  }, [store]);

  const getDataTable = useCallback((tblClsName, bodyStyle, others, hasHead) => {
    return <table className={tblClsName} style={bodyStyle} {...others}
                  ref={ref}>
      {getColGroups(false)}
      {hasHead && isJsonData && getHead()}
      {isJsonData && body}
      {!isJsonData && children}
    </table>;
  }, [body, children, getColGroups, getHead, isJsonData, ref]);

  const getBody = useCallback(() => {
    const {style, ...others} = otherProps;
    const bodyStyle = {...style, width: bodyWidth};

    //the width of head should be greater than the body's width, it should plus the width of the scroll bar
    let headWidth;
    if (!isNil(bodyWidth)) {
      headWidth = bodyWidth + scrollBarWidthRef.current;
      /*  try {
          var groups = /(\d+)(.*)/.exec(bodyWidth);
          headWidth = parseInt(groups[1]) + scrollBarWidthRef.current + groups[2];
        } catch (e) {
          validate(false, `the bodyWidth '${bodyWidth}' is invalid`);
        }*/
    }

    const headStyle = {...style};
    if (!isNil(headWidth)) {
      headStyle.width = headWidth;
    }

    if (scrollY) {
      // bodyStyle.height = bodyHeight;
    }

    if (scrollY) {
      return <>
        <div className={`table-wrapper`}>
          {
            isJsonData && <div className="head-wrapper" ref={scrollHeadRef}>
              <table className={`${clsName} scroll-head`}
                     style={headStyle} {...others}>
                {getColGroups(true)}
                {getHead()}
              </table>
            </div>
          }

          <div style={{maxHeight: bodyHeight}} className={'scroll-wrapper'}
               ref={scrollBodyRef} onScroll={doScrollX}>
            {
              getDataTable(clsName, bodyStyle, others, false)
            }
          </div>
        </div>
      </>;
    }
    return <div className={`table-wrapper`}>
      {
        getDataTable(clsName, bodyStyle, others, true)
      }
    </div>;

  }, [
    otherProps,
    bodyWidth,
    scrollY,
    getDataTable,
    clsName,
    bodyHeight,
    isJsonData,
    getColGroups,
    getHead,
    doScrollX]);

  return getBody();

});
export default Table;