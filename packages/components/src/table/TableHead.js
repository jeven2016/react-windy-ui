import React, { useCallback, useMemo } from 'react';
import { contains, convertToArray, isNil, max, validate } from '../Utils';
import HeadCell from './HeadCell';
import Checkbox from '../checkbox';
import Radio from '../radio';
import { SortOrder, traverse } from './TableUtils';
import Card from '../card';
import CheckComponent from './CheckComponent';
import Divider from '../divider';
import Button from '../button';
import clsx from 'clsx';
import Popover from '../popover';
import { IconFilter } from '../Icons';

const TableHead = React.forwardRef((props, ref) => {
  const {
    cells,
    customCheck,
    setChecked,
    checkable,
    canCheckAll,
    isCheckbox,
    rowData,
    checkedRowKeys,
    onCheckAll,
    defaultSortComparator,
    defaultSortOrder,
    sortOrder, //format: {key: key, order: 'asc'}
    sortedState,
    setSortedState,
    onSort,
    scrollHeadRef,
    activeFilter,
    setFilterParams,
    filterParams,
    setActiveFilter,
    store,
    defaultOkText,
    defaultResetText,
    defaultFilterComparator,
    popupRef,
    scrollY,
    scrollBarWidthRef
  } = props;

  const cellHeadMap = useMemo(() => {
    const map = new Map();
    traverse(cells, map, 1);
    return map;
  }, [cells]);

  const checkResult = useMemo(() => {
    if (!checkable || !canCheckAll) {
      return {
        checkedAll: false,
        atLeastOneChecked: false
      };
    }

    const resultAll =
      rowData.length <= checkedRowKeys.length &&
      rowData.every((row) => {
        return contains(row.key, checkedRowKeys);
      });

    const resultCheck = !isNil(
      rowData.find((row) => {
        return contains(row.key, checkedRowKeys);
      })
    );

    return {
      checkedAll: resultAll,
      atLeastOneChecked: resultCheck
    };
  }, [canCheckAll, checkable, checkedRowKeys, rowData]);

  const checkAllHandler = useCallback(
    (nextCheck, e) => {
      if (!customCheck) {
        setChecked(nextCheck ? rowData.map((row) => row.key) : []);
      }
      onCheckAll && onCheckAll(nextCheck, e);
    },
    [customCheck, onCheckAll, rowData, setChecked]
  );

  const sortHandler = useCallback(
    (cell, e) => {
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
          if (sortedState.key === cell.paramName) {
            //the previous should be asc
            return sortedState.order === SortOrder.asc;
          }
        }
        return isNil(cell.defaultSortOrder)
          ? defaultSortOrder === SortOrder.desc
          : cell.defaultSortOrder === SortOrder.desc;
      })();

      const sorter = (data) =>
        data.sort((next, pre) => {
          if (isDefaultSc) {
            const result = sc(next[cell.paramName], pre[cell.paramName]);
            return isDesc ? result : -result;
          }
          return sc(
            next[cell.paramName],
            pre[cell.paramName],
            isDesc ? SortOrder.desc : SortOrder.asc
          );
        });

      setSortedState({
        key: cell.paramName,
        order: isDesc ? SortOrder.desc : SortOrder.asc,
        sorter: sorter
      });
    },
    [defaultSortComparator, defaultSortOrder, onSort, setSortedState, sortedState]
  );

  const resetFilter = useCallback(
    (cell, e) => {
      const values = store.getState().checkedValues;

      if (!isNil(values[cell.paramName])) {
        values[cell.paramName] = [];
      }
      store.setState({ checkedValues: values });
    },
    [store]
  );

  const showFilter = useCallback(
    (cell, e) => {
      setActiveFilter({ key: cell.paramName });
    },
    [setActiveFilter]
  );

  //filter the rows after clicking the OK Button
  const filter = useCallback(
    (cell, e) => {
      var values = store.getState().checkedValues[cell.paramName];
      let others = [...filterParams.filter((f) => f.key !== cell.paramName)];
      let params = others;

      if (values) {
        //get the filter comparator
        let fc = isNil(cell.filterConfig.onFilter)
          ? defaultFilterComparator
          : cell.filterConfig.onFilter;

        const filterFunc = (row) => fc(values, row, cell);
        const current = values.map((v) => ({
          key: cell.paramName,
          filterValue: v,
          fc: filterFunc
        }));
        params = [...current, ...others];
      }
      popupRef.current.changeActive(false);
      setFilterParams(params);
    },
    [defaultFilterComparator, filterParams, popupRef, setFilterParams, store]
  );

  //show filter and pop-up
  const filterContent = useCallback(
    (cell) => {
      if (!cell.filterable) {
        return null;
      }
      validate(cell.filterConfig, 'The filterConfig should be set while filterable is true');

      const items = convertToArray(cell.filterConfig.filterItems);
      const okText = isNil(cell.filterConfig.okText) ? defaultOkText : cell.filterConfig.okText;
      const resetText = isNil(cell.filterConfig.resetText)
        ? defaultResetText
        : cell.filterConfig.resetText;

      //get the a list of items represented in popup
      const list =
        items.length > 0 ? (
          <Card hasWidth={false} hasBox={false}>
            {items.map((item, index) => {
              return (
                <Card.Row key={item.value + index}>
                  <CheckComponent
                    label={item.text}
                    value={item.value}
                    paramName={cell.paramName}
                    store={store}
                  />
                </Card.Row>
              );
            })}
            <Divider />
            <Card.Footer justify="center">
              <Button size="small" hasMinWidth={true} onClick={(e) => resetFilter(cell, e)}>
                {resetText}
              </Button>
              &nbsp;
              <Button
                size="small"
                hasMinWidth={true}
                color="primary"
                onClick={(e) => filter(cell, e)}
                style={{ marginLeft: '.5rem' }}>
                {okText}
              </Button>
            </Card.Footer>
          </Card>
        ) : null;

      const filterCls = clsx('filter', {
        active: !isNil(activeFilter) && activeFilter.key === cell.paramName,
        'with-items': filterParams.find((p) => p.key === cell.paramName)
      });

      return (
        <Popover
          popupInstanceRef={popupRef}
          autoWidth
          hasArrow={false}
          offset={5}
          extraClassName="table-filter"
          onChange={(popActive) => !popActive && setActiveFilter(null)}
          body={list}
          position="bottomRight">
          <div className={filterCls} onClick={(e) => showFilter(cell, e)}>
            <IconFilter />
          </div>
        </Popover>
      );
    },
    [
      activeFilter,
      defaultOkText,
      defaultResetText,
      filter,
      filterParams,
      popupRef,
      resetFilter,
      setActiveFilter,
      showFilter,
      store
    ]
  );

  const getCheckTh = useCallback(
    (otherProps) => {
      if (checkable) {
        return (
          <th className="cell-check" {...otherProps}>
            {canCheckAll &&
              (isCheckbox ? (
                <Checkbox
                  checked={checkResult.checkedAll}
                  showIndeterminateState={!checkResult.checkedAll && checkResult.atLeastOneChecked}
                  onChange={checkAllHandler}
                />
              ) : (
                <Radio checked={checkResult.checkedAll} onChange={checkAllHandler} />
              ))}
          </th>
        );
      }
      return null;
    },
    [
      canCheckAll,
      checkAllHandler,
      checkResult.atLeastOneChecked,
      checkResult.checkedAll,
      checkable,
      isCheckbox
    ]
  );

  const createTh = useCallback(
    (cell, index, cellProps) => {
      let isDesc, isAsc;
      if (!isNil(sortOrder) && sortOrder.key === cell.key) {
        isDesc = sortOrder.order === SortOrder.desc;
        isAsc = !isDesc;
      } else if (!isNil(sortedState) && sortedState.key === cell.paramName) {
        isDesc = sortedState.order === SortOrder.desc;
        isAsc = !isDesc;
      }

      const key = cell.paramName + '-' + index;
      return (
        <HeadCell
          cell={cell}
          scrollHeadRef={scrollHeadRef}
          key={key}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          sortHandler={sortHandler}
          isAsc={isAsc}
          isDesc={isDesc}
          filterContent={filterContent}
          store={store}
          thKey={key}
          {...cellProps}
        />
      );
    },
    [
      activeFilter,
      filterContent,
      scrollHeadRef,
      setActiveFilter,
      sortHandler,
      sortOrder,
      sortedState,
      store
    ]
  );

  const createHead = useCallback(() => {
    const mapSize = cellHeadMap.size;
    let maxDepth = -1;

    for (let v of cellHeadMap.values()) {
      maxDepth = max([maxDepth, v.maxDepth]);
    }
    const defaultRowSpan = maxDepth > 1 ? { rowSpan: maxDepth } : null;

    const trArray = [];
    for (let [rowId, node] of cellHeadMap) {
      const size = node.nodes.length;
      const tr = (
        <tr key={`tr-${rowId}`}>
          {rowId === 1 && getCheckTh(defaultRowSpan)}
          {node.nodes.map((n, i) => {
            const otherProps = {};

            if (mapSize > 1) {
              //for at least 2 rows
              const isRowSpanType = n.setSpanType === 'row';
              const isColSpanType = n.setSpanType === 'col';

              if (isRowSpanType && node.maxDepth > 1) {
                otherProps.rowSpan = node.maxDepth;
              }
              if (isColSpanType) {
                otherProps.colSpan = n.leavesCount;
              }
            }

            if (rowId === 1 && scrollY && i + 1 === size) {
              otherProps.extraClassName = 'last-head-th';
            }

            if (n.isTitle) {
              otherProps.extraClassName = `${otherProps.extraClassName || ''} title`;
            }
            return createTh(n, i, otherProps);
          })}
          {rowId === 1 && scrollY && (
            <th
              className="scroll-th"
              {...defaultRowSpan}
              style={{ width: scrollBarWidthRef.current }}
            />
          )}
        </tr>
      );

      trArray.push(tr);
    }

    return <thead>{trArray}</thead>;
  }, [cellHeadMap, createTh, getCheckTh, scrollBarWidthRef, scrollY]);

  return createHead();
});

export default TableHead;
