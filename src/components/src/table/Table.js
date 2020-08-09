import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import {contains, convertToArray, invoke, isNil, validate} from '../Utils';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import useInternalState from '../common/useInternalState';
import {IconFilter} from '../Icons';
import Button from '../button';
import Popover from '../popover';
import Card from '../card';
import Divider from '../divider';
import {initStore} from '../common/Store';
import CheckComponent from './CheckComponent';

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

const SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

const SortComparator = (a, b) => a === b ? 0 : (a < b ? 1 : -1); //by desc

const FilterComparator = (filteredValues, row, cell) => {
  for (let value of filteredValues) {
    if (row[cell.showParam].includes(value)) {
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

    ...otherProps
  } = props;
  const isLoadDataDefined = !isNil(loadData);
  const isCellsDefined = !isNil(cells);
  const isJsonData = isLoadDataDefined || isCellsDefined;
  if (isJsonData) {
    validate(isLoadDataDefined, 'the loadData should be provided');
    validate(isCellsDefined, 'the cells should be provided');
  }

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

  const {state: checkedRowKeys, setState: setChecked, customized: customCheck}
      = useInternalState({
    props,
    stateName: 'checkedRows',
    defaultState: convertToArray(defaultCheckedRows),
    state: convertToArray(checkedRows),
  });

  const checkAllHandler = useCallback((nextCheck, e) => {
    if (!customCheck) {
      setChecked(nextCheck ? rowData.map(row => row.key) : []);
    }
    onCheckAll && onCheckAll(nextCheck, e);
  }, [customCheck, onCheckAll, rowData, setChecked]);

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

  const checkResult = useMemo(() => {
    if (!checkable || !canCheckAll) {
      return {
        checkedAll: false,
        atLeastOneChecked: false,
      };
    }

    const resultAll = rowData.length <= checkedRowKeys.length &&
        rowData.every(row => {
          return contains(row.key, checkedRowKeys);
        });

    const resultCheck = !isNil(rowData.find(row => {
      return contains(row.key, checkedRowKeys);
    }));

    return {
      checkedAll: resultAll,
      atLeastOneChecked: resultCheck,
    };
  }, [canCheckAll, checkable, checkedRowKeys, rowData]);

  const sortHandler = useCallback((cell, e) => {
    if (!cell.sortable) {
      return;
    }

    //don't set internal data if onSort is specified
    if (!isNil(onSort)) {
      onSort(cell);
      return;
    }

    let sc = defaultSortComparator;
    let isDefaultSc = true;
    if (!isNil(cell.sortComparator)) {
      sc = cell.sortComparator;
      isDefaultSc = false;
    }

    const isDesc = (() => {
      if (!isNil(sortedState)) {
        if (sortedState.key === cell.showParam) {
          //the previous should be asc
          return sortedState.order === SortOrder.asc;
        }
      }
      return isNil(cell.defaultSortOrder)
          ? defaultSortOrder === SortOrder.desc
          : cell.defaultSortOrder === SortOrder.desc;
    })();

    const sorter = data => data.sort(
        (next, pre) => {
          if (isDefaultSc) {
            const result = sc(next[cell.showParam], pre[cell.showParam]);
            return isDesc ? result : -result;
          }
          return sc(next[cell.showParam], pre[cell.showParam],
              isDesc ? SortOrder.desc : SortOrder.asc);
        });

    setSortedState(
        {
          key: cell.showParam,
          order: isDesc ? SortOrder.desc : SortOrder.asc,
          sorter: sorter,
        });
  }, [defaultSortComparator, defaultSortOrder, onSort, sortedState]);

  const showFilter = useCallback((cell, e) => {
    setActiveFilter({key: cell.showParam});
  }, []);

  //filter the rows after clicking the OK Button
  const filter = useCallback((cell, e) => {
    var values = store.getState().checkedValues[cell.showParam];
    let others = [...filterParams.filter(f => f.key !== cell.showParam)];
    let params = others;

    if (values) {
      //get the filter comparator
      let fc = isNil(cell.filterConfig.onFilter)
          ? defaultFilterComparator
          : cell.filterConfig.onFilter;

      const filterFunc = (row) => fc(values, row, cell);
      const current = values.map(
          v => ({key: cell.showParam, filterValue: v, fc: filterFunc}));
      params = [...current, ...others];
    }
    popupRef.current.changeActive(false);
    // console.log(params);
    setFilterParams(params);
  }, [defaultFilterComparator, filterParams, store]);

  const resetFilter = useCallback((cell, e) => {
    const values = store.getState().checkedValues;

    if (!isNil(values[cell.showParam])) {
      values[cell.showParam] = [];
    }
    store.setState({checkedValues: values});
  }, [store]);

  const checkTh = useMemo(() => {
    if (checkable) {
      return <th className="cell-check">
        {canCheckAll &&
        (isCheckbox ?
            <Checkbox checked={checkResult.checkedAll}
                      showIndeterminateState={!checkResult.checkedAll &&
                      checkResult.atLeastOneChecked}
                      onChange={checkAllHandler}/>
            : <Radio checked={checkResult.checkedAll}
                     onChange={checkAllHandler}/>)}
      </th>;
    }
    return null;
  }, [
    canCheckAll,
    checkAllHandler,
    checkResult.atLeastOneChecked,
    checkResult.checkedAll,
    checkable,
    isCheckbox]);

  //show filter and pop-up
  const filterContent = useCallback((cell) => {
    if (!cell.filterable) {
      return null;
    }
    validate(cell.filterConfig,
        'The filterConfig should be set while filterable is true');

    const items = convertToArray(cell.filterConfig.filterItems);
    const okText = isNil(cell.filterConfig.okText)
        ? defaultOkText
        : cell.filterConfig.okText;
    const resetText = isNil(cell.filterConfig.resetText)
        ? defaultResetText
        : cell.filterConfig.resetText;

    //get the a list of items represented in popup
    const list = items.length > 0 ? <Card hasWidth={false} hasBox={false}>
          {
            items.map((item, index) => {
              return <Card.Row key={item.value + index}>
                <CheckComponent label={item.text} value={item.value}
                                paramName={cell.showParam} store={store}/>
              </Card.Row>;
            })
          }
          <Divider/>
          <Card.Footer justify="center">
            <Button size="small" hasMinWidth={true}
                    onClick={(e) => resetFilter(cell, e)}>{resetText}</Button>&nbsp;
            <Button size="small" hasMinWidth={true} color="primary"
                    onClick={(e) => filter(cell, e)}
                    style={{marginLeft: '.5rem'}}>{okText}</Button>
          </Card.Footer>
        </Card>
        : null;

    const filterCls = clsx('filter', {
      active: !isNil(activeFilter) && activeFilter.key === cell.showParam,
      'with-items': filterParams.find(p => p.key === cell.showParam),
    });

    return <Popover popupInstanceRef={popupRef} autoWidth hasArrow={false}
                    offset={5}
                    extraClassName="table-filter"
                    onChange={popActive => !popActive && setActiveFilter(null)}
                    body={list} position="bottomRight">
      <div className={filterCls} onClick={(e) => showFilter(cell, e)}>
        <IconFilter/>
      </div>
    </Popover>;
  }, [
    activeFilter,
    defaultOkText,
    defaultResetText,
    filter,
    filterParams,
    resetFilter,
    showFilter,
    store]);

  const headElements = useCallback((cell) => {
    if (cell.elements) {
      return cell.elements.map((elem,index) => {
        return <Popover autoWidth hasArrow={false} key={`popover-${elem.key}`}
                        offset={5}
                        onChange={popActive => !popActive &&
                            setActiveFilter(null)}
                        body={"what's wrong with you?"} position="bottomRight">
          <div className="head-elem"
               onClick={(e) => setActiveFilter({key: `elem-${elem.key}`})}>
            {elem.head}
          </div>
        </Popover>;
      });
    }
    return null;
  }, []);

  const head = useMemo(() => {
    return <thead>
    <tr>
      {checkTh}
      {
        cellsData.map((cell, i) => {
          let isDesc, isAsc;
          if (!isNil(sortOrder) && sortOrder.key === cell.key) {
            isDesc = sortOrder.order === SortOrder.desc;
            isAsc = !isDesc;
          } else if (!isNil(sortedState) && sortedState.key ===
              cell.showParam) {
            isDesc = sortedState.order === SortOrder.desc;
            isAsc = !isDesc;
          }

          const hasWrapper = cell.sortable || cell.filterable;
          return <th className={hasWrapper ? 'with-wrapper' : null}
                     key={cell.showParam + '-' + i}>
            {!hasWrapper && cell.head}
            {
              hasWrapper &&
              <div className="content-wrapper">
                <div
                    className={`td-content ${cell.sortable ? 'sort-td' : null}`}
                    onClick={(e) => sortHandler(cell, e)}>
                  <span>{cell.head}</span>
                  {
                    cell.sortable && <div className="sort-column">
                  <span className={`arrow-icon up-arrow ${isAsc
                      ? 'text color-blue'
                      : null}`}/>
                      <span className={`arrow-icon down-arrow ${isDesc
                          ? 'text color-blue'
                          : null}`}/>
                    </div>
                  }
                </div>
                {headElements(cell)}
                {filterContent(cell)}
              </div>
            }
          </th>;
        })
      }
    </tr>
    </thead>;
  }, [checkTh, cellsData, sortOrder, sortedState, filterContent, sortHandler]);

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

  const body = useMemo(() => <tbody>
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
          cellsData.map((cell, i) => {
            let content = row[cell.showParam];
            if (cell.format) {
              content = invoke(cell.format, content, row, index);
            }
            return <td key={row.key + '-' + i}>{content}</td>;
          })
        }
      </tr>;
    })
  }
  </tbody>, [
    cellsData,
    checkable,
    checkedRowKeys,
    getCheckForRow,
    highlightCheckedRow,
    rowData]);

  const colGroups = useMemo(() => {
    return <>
      <colgroup>
        {checkable && <col className="col-check"/>}
      </colgroup>
    </>;
  }, [checkable]);

  const clsName = clsx(extraClassName, className, type, {
    'hover': hover,
    'clear-border': !hasBorder,
    'global-with-box': hasBox,
  });

  return <>
    <table className={clsName} {...otherProps} ref={ref}>
      {colGroups}
      {isJsonData && head}
      {isJsonData && body}
      {!isJsonData && children}
    </table>
  </>;

});
export default Table;