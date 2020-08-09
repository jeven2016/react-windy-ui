import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {
  contains,
  convertToArray,
  includes,
  invoke,
  isNil,
  validate,
} from '../Utils';
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

const FilterComparator = (filteredValues, row, cell) => includes(filteredValues,
    row[cell.showParam]);

const Table = React.forwardRef((props, ref) => {
  const {
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

    //define in cells
    //sortable

    //defaultSortOrder
    //sortOrder
    //sortComparator

    // sortComparator,//function
    // defaultSortOrder,
    // sortOrder,

    ...otherProps
  } = props;
  const isLoadDataDefined = !isNil(loadData);
  const isCellsDefined = !isNil(cells);
  const isJsonData = isLoadDataDefined || isCellsDefined;
  if (isJsonData) {
    validate(isLoadDataDefined, 'the loadData should be provided');
    validate(isCellsDefined, 'the cells should be provided');
  }

  const popupRef = useRef(null);
  const [sortedState, setSortedState] = useState();//{key: paramName, order: asc/desc}

  const [checkedItems, setCheckedItems] = useState([]);

  //init a internal store
  const [store] = useState(initStore({
    checkedValues: [],
  }));

  const [sortedRowData, setSortedRowData] = useState(null);
  const cellsData = useMemo(() => convertToArray(cells), [cells]);
  const rowData = useMemo(
      () => sortedRowData ? sortedRowData : convertToArray(loadData),
      [sortedRowData, loadData]);
  const isCheckbox = checkType === CheckType.checkbox;

  const [currentFilter, setFilter] = useState(null);//{key: paramName, }

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

    const sortedData = rowData.sort(
        (next, pre) => {
          if (isDefaultSc) {
            const result = sc(next[cell.showParam], pre[cell.showParam]);
            return isDesc ? result : -result;
          }
          return sc(next[cell.showParam], pre[cell.showParam],
              isDesc ? SortOrder.desc : SortOrder.asc);
        });

    setSortedState(
        {key: cell.showParam, order: isDesc ? SortOrder.desc : SortOrder.asc});
    setSortedRowData([...sortedData]);
  }, [defaultSortComparator, defaultSortOrder, onSort, rowData, sortedState]);

  const showFilter = useCallback((cell, e) => {
    setFilter({key: cell.showParam});
  }, []);

  //filter the rows after clicking the OK Button
  const filter = useCallback((cell, e) => {
    var filteredValues = store.getState().checkedValues;
    let nextData = convertToArray(loadData);
    if (filteredValues.length > 0) {
      var fc = isNil(cell.filterComparator)
          ? defaultFilterComparator
          : cell.filterComparator;
      nextData = nextData.filter((row) => fc(filteredValues, row, cell));
    }

    setSortedRowData([...nextData]);
    popupRef.current.changeActive(false);
  }, [defaultFilterComparator, loadData, store]);

  console.log('changing...');
  const resetFilter = useCallback((e) => {
    store.setState({checkedValues: []});
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
                <CheckComponent label={item.text} value={item.value} store={store}/>
              </Card.Row>;
            })
          }
          <Divider/>
          <Card.Footer justify="center">
            <Button size="small" hasMinWidth={true}
                    onClick={resetFilter}>{resetText}</Button>&nbsp;
            <Button size="small" hasMinWidth={true} color="primary"
                    onClick={(e) => filter(cell, e)}
                    style={{marginLeft: '.5rem'}}>{okText}</Button>
          </Card.Footer>
        </Card>
        : null;

    const filterCls = clsx('filter', {
      active: !isNil(currentFilter) && currentFilter.key === cell.showParam,
    });

    //todo
    return <Popover popupInstanceRef={popupRef} autoWidth hasArrow={false}
                    offset={5}
                    extraClassName="table-filter"
                    onChange={popActive => !popActive && setFilter(null)}
                    body={list} position="bottomRight">
      <div className={filterCls} onClick={(e) => showFilter(cell, e)}>
        <IconFilter/>
      </div>
    </Popover>;
  }, [
    currentFilter,
    defaultOkText,
    defaultResetText,
    filter,
    showFilter,
    store]);

  const head = useMemo(() => {
    return <thead>
    <tr>
      {checkTh}
      {
        cellsData.map(cell => {
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
                     key={cell.key}>
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
    <table className={clsName} {...otherProps}>
      {colGroups}
      {isJsonData && head}
      {isJsonData && body}
      {!isJsonData && children}
    </table>
  </>;

});
export default Table;