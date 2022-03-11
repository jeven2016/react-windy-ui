import React, { useMemo, useState } from 'react';
import Button from '../button';
import {
  IconArrowLeft,
  IconArrowRight,
  IconLeftDoubleArrows,
  IconMore,
  IconRightDoubleArrows
} from '../icon';
import Select from '../select';
import { invoke, isBlank, isNil, isNumber } from '../Utils';
import useInternalState from '../common/useInternalState';
import InputGroup from '../inputGroup/InputGroup';
import Input from '../input';
import Tooltip from '../tooltip';
import clsx from 'clsx';
import useEventCallback from '../common/useEventCallback';
import PropTypes from 'prop-types';

const PageButton = React.forwardRef((props, ref) => {
  const { left = true, onClick, buttonProps } = props;
  const [showIcon, setShow] = useState(false);

  const toggle = useEventCallback((value) => {
    setShow(value);
  });

  const focus = useEventCallback(() => toggle(true));
  const blur = useEventCallback(() => toggle(false));

  const arrowIcon = left ? (
    <IconLeftDoubleArrows style={{ fontSize: '1em' }} />
  ) : (
    <IconRightDoubleArrows style={{ fontSize: '1em' }} />
  );

  return (
    <Button
      inverted
      color="blue"
      hasBox={false}
      onClick={onClick}
      onMouseOver={focus}
      onMouseLeave={blur}
      onFocus={focus}
      onBlur={blur}
      {...buttonProps}>
      {!showIcon && <IconMore />}
      {showIcon && arrowIcon}
    </Button>
  );
});

const Pagination = React.forwardRef((props, ref) => {
  const {
    className = 'pagination',
    extraClassName,
    siblingCount = 2,
    pageCount,
    page,
    defaultPage = 1,
    hasPrevButton = true,
    hasNextButton = true,
    hasPageRange = false,
    pageRanges = [],
    renderPageRanges,
    defaultPageRange,
    pageRange,
    onChange,
    onChangeRange,
    hasGo = false,
    buttonProps,
    leftItems = [],
    rightItems = [],
    simple = false,
    compactMenu = true,
    renderPre,
    renderNext,
    selectProps,
    ...otherProps
  } = props;

  const [currentPage, setPage] = useInternalState({
    props,
    stateName: 'page',
    defaultState: defaultPage,
    state: page
  });

  const [limit, setLimit] = useInternalState({
    props,
    stateName: 'pageRange',
    defaultState: defaultPageRange,
    state: pageRange
  });

  const [directPage, setDirectPage] = useState('');

  const changePage = useEventCallback((nextPage, e) => {
    setPage(nextPage);
    onChange && onChange(nextPage, limit, e);
  });

  const goTo = useEventCallback((selectedValue, e) => {
    if (!isNumber(selectedValue)) {
      return;
    }

    if (selectedValue <= pageCount && selectedValue >= 1) {
      selectedValue = parseInt(selectedValue);
      setPage(selectedValue);
    }

    onChange && onChange(selectedValue, limit, e);
  });

  const firstPageItem = useMemo(() => {
    return (
      <span className="item">
        <Button
          outline
          initOutlineColor
          hasOutlineBackground={false}
          hasBox={false}
          onClick={(e) => goTo(1, e)}
          active={currentPage === 1}
          type="primary"
          {...buttonProps}>
          <span className="page-text">1</span>
        </Button>
      </span>
    );
  }, [buttonProps, currentPage, goTo]);

  const lastPageItem = useMemo(() => {
    return (
      <span className="item">
        <Button
          outline
          initOutlineColor
          hasOutlineBackground={false}
          hasBox={false}
          onClick={(e) => goTo(pageCount, e)}
          active={!isNil(pageCount) && currentPage === pageCount}
          type="primary"
          {...buttonProps}>
          <span className="page-text">{pageCount}</span>
        </Button>
      </span>
    );
  }, [buttonProps, currentPage, goTo, pageCount]);

  const otherPageItems = useMemo(() => {
    const items = [];

    if (isNil(currentPage)) {
      const occupy = 2 * siblingCount + 1;
      const lastNumber = occupy > pageCount ? pageCount : occupy + 1;
      for (let i = 2; i < lastNumber; i++) {
        items.push({ value: i, active: false });
      }
    } else {
      //start
      const firstPage = 1;
      let start = 1;
      if (currentPage - firstPage > siblingCount) {
        start = currentPage - siblingCount;
      }

      let end = start + 2 * siblingCount + 1;
      if (end > pageCount) {
        end = pageCount;
      }

      if (end - start < 2 * siblingCount + 1) {
        let newStart = end - 2 * siblingCount;
        if (newStart < 1) {
          newStart = 1;
        }
        start = newStart;
      }

      for (let i = start; i < end; i++) {
        if (i === 1 || i === pageCount) {
          continue;
        }
        items.push({ value: i, active: !isNil(currentPage) && i === currentPage });
      }
    }
    return items;
  }, [currentPage, pageCount, siblingCount]);

  const showPrePages = useEventCallback(() => {
    if (otherPageItems.length === 0) {
      return;
    }

    const startItem = otherPageItems[0];
    let nextPage = startItem.value - 2 * siblingCount + 1;
    if (nextPage <= 1) {
      changePage(1);
    } else {
      changePage(nextPage);
    }
  });

  const preIconItem = useMemo(() => {
    if (otherPageItems.length === 0 || otherPageItems[0].value - 1 === 1) {
      return null;
    }

    return (
      <span className="item">
        <PageButton left={true} onClick={showPrePages} buttonProps={buttonProps} />
      </span>
    );
  }, [buttonProps, otherPageItems, showPrePages]);

  const showNextPages = useEventCallback(() => {
    if (otherPageItems.length === 0) {
      return;
    }

    const startItem = otherPageItems[otherPageItems.length - 1];
    let nextPage = startItem.value + 2 * siblingCount - 1;
    if (nextPage >= pageCount) {
      changePage(pageCount - siblingCount);
    } else {
      changePage(nextPage);
    }
  });

  const nextIconItem = useMemo(() => {
    if (
      otherPageItems.length === 0 ||
      otherPageItems[otherPageItems.length - 1].value + 1 === pageCount
    ) {
      return null;
    }

    return (
      <span className="item">
        <PageButton left={false} onClick={showNextPages} buttonProps={buttonProps} />
      </span>
    );
  }, [buttonProps, otherPageItems, pageCount, showNextPages]);

  const enterPage = useEventCallback((e) => {
    setDirectPage(e.target.value);
  });

  const updateDirectPage = useEventCallback((e) => {
    if (!isNumber(directPage) || directPage < 1 || directPage > pageCount) {
      setDirectPage('');
    }
  });

  const changePageLimit = useEventCallback((value, e) => {
    const val = parseInt(value);
    setLimit(val);
    onChangeRange && onChangeRange(val, e);
  });

  const preBtn = useMemo(() => {
    return (
      hasPrevButton && (
        <span className="item">
          <Button
            outline
            initOutlineColor
            hasOutlineBackground={false}
            hasBox={false}
            disabled={currentPage <= 1}
            onClick={(e) => goTo(currentPage - 1, e)}
            type="primary"
            {...buttonProps}>
            {renderPre ? renderPre() : <IconArrowLeft />}
          </Button>
        </span>
      )
    );
  }, [buttonProps, currentPage, goTo, hasPrevButton, renderPre]);

  const nextBtn = useMemo(() => {
    return (
      hasNextButton && (
        <span className="item">
          <Button
            outline
            initOutlineColor
            hasOutlineBackground={false}
            hasBox={false}
            disabled={currentPage === pageCount}
            onClick={(e) => goTo(currentPage + 1, e)}
            type="primary"
            {...buttonProps}>
            {renderNext ? renderNext() : <IconArrowRight />}
          </Button>
        </span>
      )
    );
  }, [buttonProps, currentPage, goTo, hasNextButton, pageCount, renderNext]);

  const jumpTo = useEventCallback((e) => {
    if (e.key !== 'Enter') {
      return;
    }

    if (!isNumber(directPage)) {
      setDirectPage('');
      return;
    }

    let targetPage = parseInt(directPage);
    if (targetPage > pageCount) {
      targetPage = pageCount;
    }
    if (targetPage <= 1) {
      targetPage = 1;
    }

    if (targetPage > -1) {
      goTo(targetPage, e);
    }
  });

  if (pageCount <= 0) {
    return null;
  }

  const clsName = clsx(extraClassName, className);

  if (simple) {
    const displayPage = isBlank(currentPage) ? 1 : currentPage;
    const simpleClsName = clsx('simple-content');
    return (
      <div className={clsName} {...otherProps} ref={ref}>
        {preBtn}
        <div className={simpleClsName}>
          {/*todo*/}
          {/*  {
          hasGo &&
          <Tooltip body={displayPage} hidePopup={isBlank(displayPage)}>
            <Input value={displayPage}
                   className="input page-input"
                   onChange={enterPage}
                   onKeyDown={jumpTo}
                   onBlur={updateDirectPage}/>
          </Tooltip>
        }
        {!hasGo && <span className="label">{currentPage}</span>}*/}
          {<span className="label">{displayPage}</span>}

          <span className="label">/</span>
          <span className="label">{pageCount}</span>
        </div>
        {nextBtn}
      </div>
    );
  }

  return (
    <>
      <div className={clsName} {...otherProps} ref={ref}>
        {leftItems.map((item, index) => {
          return (
            <span className="item" key={`left-${index}`}>
              {item}
            </span>
          );
        })}
        {preBtn}
        {firstPageItem}
        {preIconItem}
        {otherPageItems.map((item, index) => {
          return (
            <span className="item" key={`${item.value}-${index}`}>
              <Button
                active={item.active}
                outline
                initOutlineColor
                hasBox={false}
                hasOutlineBackground={false}
                onClick={(e) => goTo(item.value, e)}
                type="primary"
                {...buttonProps}>
                <span className="page-text">{item.value}</span>
              </Button>
            </span>
          );
        })}

        {nextIconItem}
        {lastPageItem}
        {nextBtn}

        {hasPageRange && (
          <Select
            defaultValue={limit}
            onSelect={changePageLimit}
            size="small"
            compactMenu={compactMenu}
            block={false}
            {...selectProps}>
            {pageRanges.map((value, index) => {
              const itemText = isNil(renderPageRanges)
                ? `${value}`
                : invoke(renderPageRanges, value);
              return <Select.Option value={value} key={`${value}-${index}`} text={itemText} />;
            })}
          </Select>
        )}

        {hasGo && (
          <span className="go-item">
            <InputGroup normal={false}>
              <Button inverted type="primary" hasBox={false} onClick={(e) => goTo(directPage, e)}>
                跳至
              </Button>
              <Tooltip body={directPage} hidePopup={isBlank(directPage)}>
                <Input
                  value={directPage}
                  onChange={enterPage}
                  className="input page-input"
                  onKeyDown={jumpTo}
                  onBlur={updateDirectPage}
                />
              </Tooltip>
            </InputGroup>
          </span>
        )}
        {rightItems.map((item, index) => {
          return (
            <span className="item" key={`right-${index}`}>
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
});

Pagination.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  siblingCount: PropTypes.number,
  pageCount: PropTypes.number,
  page: PropTypes.number,
  defaultPage: PropTypes.number,
  hasPrevButton: PropTypes.bool,
  hasNextButton: PropTypes.bool,
  hasPageRange: PropTypes.bool,
  pageRanges: PropTypes.arrayOf(PropTypes.number),
  renderPageRanges: PropTypes.func,
  defaultPageRange: PropTypes.number,
  pageRange: PropTypes.number,
  onChange: PropTypes.func,
  onChangeRange: PropTypes.func,
  hasGo: PropTypes.bool,
  buttonProps: PropTypes.object,
  leftItems: PropTypes.arrayOf(PropTypes.node),
  rightItems: PropTypes.arrayOf(PropTypes.node),
  simple: PropTypes.bool,
  compactMenu: PropTypes.bool,
  renderPre: PropTypes.func,
  renderNext: PropTypes.func,
  selectProps: PropTypes.object
};

export default Pagination;
