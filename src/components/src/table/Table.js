import React, {useCallback, useMemo} from 'react';
import clsx from 'clsx';
import {contains, convertToArray, invoke, isNil, validate} from '../Utils';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import useInternalState from '../common/useInternalState';

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
  ascend: 'ascend',
  descend: 'descend',
};

const SortComparator = (a, b) => a < b;

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

    sortComparator = SortComparator,

    //define in cells
    // onSort,

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
  const cellsData = useMemo(() => convertToArray(cells), [cells]);
  const rowData = useMemo(() => convertToArray(loadData), [loadData]);
  const isCheckbox = checkType === CheckType.checkbox;

  const {state: checkedRowKeys, setState: setChecked, customized: customCheck}
      = useInternalState({
    props,
    stateName: 'checkedRows',
    defaultState: convertToArray(defaultCheckedRows),
    state: convertToArray(checkedRows),
  });

/*  const {state: sortOrderState, setState: setSortOrder, customized: customSort}
      = useInternalState({
    props,
    stateName: 'sortOrder',
    defaultState: defaultSortOrder,
    state: sortOrder,
    backupState: SortOrder.descend,
  });*/

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

  const sortHandler = useCallback((cellData, e) => {
    console.log(cellData);
  }, []);

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

  const head = useMemo(() => {
    return <thead>
    <tr>
      {checkTh}
      {
        cellsData.map(cell => {
          return <th key={cell.key}>
            <div className="td-content"
                 onClick={(e) => sortHandler(cell.key, e)}>
              <span>{cell.head}</span>
              {
                cell.sortable && <div className="sort-column">
                  <span className="arrow-icon up-arrow"/>
                  <span className="arrow-icon down-arrow"/>
                </div>
              }

            </div>

          </th>;
        })
      }
    </tr>
    </thead>;
  }, [checkTh, cellsData, sortHandler]);

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
    return <tbody>
    {
      rowData.map((row, index) => {
        if (index >= cellsData.length) {
          return null;
        }
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
    </tbody>;
  }, [
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