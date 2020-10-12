import React, {useCallback} from 'react';
import clsx from 'clsx';
import {isNil} from '../Utils';
import Popover from '../popover';
import useFixedComponent from './useFixedComponent';

const HeadCell = React.forwardRef((props, ref) => {
  const {
    cell,
    extraClassName,
    activeFilter,
    setActiveFilter,
    sortHandler,
    isAsc,
    isDesc,
    filterContent,
    store,
    thKey,
    scrollHeadRef,
    ...otherProps
  } = props;

  const {getFixedCellCls, style, multiRef, showBox} = useFixedComponent(
      {ref, cell, store, scrollHeadRef});

  const hasWrapper = cell.sortable || cell.filterable;

  const thClsName = clsx(extraClassName, getFixedCellCls(cell.fixed, showBox), {
    'with-wrapper': hasWrapper,
  });

  const headElements = useCallback(() => {
    if (cell.elements) {
      return cell.elements.map((elem, index) => {
        const ElemBody = elem.body;
        const elemKey = `elem-${elem.key}`;
        const elemClsName = clsx('head-elem', {
          active: !isNil(activeFilter) && activeFilter.key === elemKey,
        });
        return <Popover autoWidth hasArrow={false} key={`popover-${elem.key}`}
                        offset={5}
                        onChange={popActive => !popActive &&
                            setActiveFilter(null)}
                        body={<ElemBody tableProps={props}/>}
                        position="bottomRight">
          <div className={elemClsName}
               onClick={(e) => setActiveFilter({key: elemKey})}>
            {elem.head}
          </div>
        </Popover>;
      });
    }
    return null;
  }, [activeFilter, cell.elements, props, setActiveFilter]);

  return <th className={thClsName} ref={multiRef} style={style}
             key={thKey} {...otherProps}>
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
        {headElements()}
        {filterContent(cell)}
      </div>
    }
  </th>;

});

export default HeadCell;
