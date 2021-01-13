import React, {useCallback, useMemo, useState} from 'react';
import Button from './button';
import {
  IconArrowLeft,
  IconArrowRight,
  IconLeftDoubleArrows,
  IconMore,
  IconRightDoubleArrows,
} from './Icons';
import Select from './select';
import {invoke, isBlank, isInteger, isNil, isNumber, validate} from './Utils';
import useInternalState from './common/useInternalState';
import InputGroup from './InputGroup';
import Input from './Input';
import Tooltip from './Tooltip';
import clsx from 'clsx';

const PageButton = React.forwardRef((props, ref) => {
  const {left = true, onClick, buttonProps} = props;
  const [showIcon, setShow] = useState(false);

  const toggle = useCallback((value) => {
    setShow(value);
  }, [setShow]);

  const focus = useCallback(() => toggle(true), [toggle]);
  const blur = useCallback(() => toggle(false), [toggle]);

  const arrowIcon = left ? <IconLeftDoubleArrows style={{fontSize: '1em'}}/> :
      <IconRightDoubleArrows style={{fontSize: '1em'}}/>;

  return <Button outline initOutlineColor hasOutlineBackground={false}
                 hasBox={false}
                 onClick={onClick}
                 onMouseOver={focus}
                 onMouseLeave={blur}
                 onFocus={focus}
                 onBlur={blur}
                 type="primary"
                 {...buttonProps}>
    {!showIcon && <IconMore/>}
    {showIcon && arrowIcon}
  </Button>;
});

const Pagination = React.forwardRef((props, ref) => {
  const {
    siblingCount = 2,
    pageCount,
    page,
    defaultPage = 1,
    hasPrevButton = true,
    hasNextButton = true,
    hasPageLimits = true,
    pageLimits = [10, 20, 50],
    renderPageLimitItem,
    defaultLimitRows = 10,
    limitRows,
    onChange, //onChange(e, value, limitRows)
    onChangeRows,
    hasGo = false,
    buttonProps,
    leftItems = [],
    rightItems = [],
    simple = false,
    compact = true,
    renderPre,
    renderNext,
    selectProps,
    ...otherProps
  } = props;

  validate(!isNil(pageCount), 'Invalid value of pageCount');

  const {
    state: currentPage,
    setState: setPage,
    customized,
  } = useInternalState({
    props,
    stateName: 'page',
    defaultState: defaultPage,
    state: page,
  });

  const {
    state: limit,
    setState: setLimit,
    customizedLimit,
  } = useInternalState({
    props,
    stateName: 'limitRows',
    defaultState: defaultLimitRows,
    state: limitRows,
  });

  const [basePage, setBasePage] = useState(currentPage); //the base page for calculate the number items to display
  const [disablePreBtn, setDisablePreBtn] = useState(currentPage === 1);
  const [disableNextBtn, setDisableNextBtn] = useState(
      currentPage === pageCount);

  const [directPage, setDirectPage] = useState('');

  const goTo = useCallback((selectedValue, e) => {
    if (!isNumber(selectedValue)) {
      return;
    }
    if (!customized) {
      if (selectedValue >= pageCount) {
        //disable the button
        !disableNextBtn && setDisableNextBtn(true);
        disablePreBtn && setDisablePreBtn(false);
      } else if (selectedValue > 1) {
        disableNextBtn && setDisableNextBtn(false);
        disablePreBtn && setDisablePreBtn(false);
      } else {
        disableNextBtn && setDisableNextBtn(false);
        !disablePreBtn && setDisablePreBtn(true);
      }

      if (selectedValue <= pageCount && selectedValue >= 1) {
        selectedValue = parseInt(selectedValue);
        setPage(selectedValue);
        setBasePage(selectedValue);
      }
    }
    onChange && onChange(selectedValue, limit, e);
  }, [
    customized,
    disableNextBtn,
    disablePreBtn,
    limit,
    onChange,
    pageCount,
    setPage]);

  const firstPageItem = useMemo(() => {
    return <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                hasBox={false}
                onClick={(e) => goTo(1, e)}
                active={currentPage === 1}
                type="primary"
                {...buttonProps}>
          <span className="page-text">1</span>
        </Button>
      </span>;
  }, [buttonProps, currentPage, goTo]);

  const lastPageItem = useMemo(() => {
    return <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                hasBox={false}
                onClick={(e) => goTo(pageCount, e)}
                active={!isNil(pageCount) && currentPage === pageCount}
                type="primary"
                {...buttonProps}>
          <span className="page-text">{pageCount}</span>
        </Button>
      </span>;
  }, [buttonProps, currentPage, goTo, pageCount]);

  const otherPageItems = useMemo(() => {
    const items = [];

    if (isNil(basePage)) {
      const occupy = (2 * siblingCount + 1);
      const lastNumber = occupy > pageCount ? pageCount : occupy + 1;
      for (let i = 2; i < lastNumber; i++) {
        items.push({value: i, active: false});
      }
    } else {

      //start
      const firstPage = 1;
      let start = 1;
      if (basePage - firstPage > siblingCount) {
        start = basePage - siblingCount;
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
        items.push(
            {value: i, active: !isNil(currentPage) && i === currentPage});
      }
    }
    return items;
  }, [basePage, siblingCount, currentPage, pageCount]);

  const showPrePages = useCallback(() => {
    if (otherPageItems.length === 0) {
      return;
    }

    const startItem = otherPageItems[0];
    let nextBasePage = startItem.value - 2 * siblingCount + 1;
    if (nextBasePage <= 1) {
      setBasePage(1);
    } else {
      setBasePage(nextBasePage);
    }

  }, [otherPageItems, siblingCount]);

  const prePagesItem = useMemo(() => {
    if (otherPageItems.length === 0 || otherPageItems[0].value - 1 === 1) {
      return null;
    }

    return <span className="item">
         <PageButton left={true} onClick={showPrePages}
                     buttonProps={buttonProps}/>
        </span>;
  }, [buttonProps, otherPageItems, showPrePages]);

  const showNextPages = useCallback(() => {
    if (otherPageItems.length === 0) {
      return;
    }

    const startItem = otherPageItems[otherPageItems.length - 1];
    let nextBasePage = startItem.value + 2 * siblingCount - 1;
    if (nextBasePage >= pageCount) {
      setBasePage(pageCount - siblingCount);
    } else {
      setBasePage(nextBasePage);
    }

  }, [otherPageItems, pageCount, siblingCount]);

  const nextPagesItem = useMemo(() => {
    if (otherPageItems.length === 0
        || otherPageItems[otherPageItems.length - 1].value + 1 === pageCount) {
      return null;
    }

    return <span className="item">
           <PageButton left={false} onClick={showNextPages}
                       buttonProps={buttonProps}/>
        </span>;
  }, [buttonProps, otherPageItems, pageCount, showNextPages]);

  const enterPage = useCallback((e) => {
    setDirectPage(e.target.value);
  }, []);

  const updateDirectPage = useCallback((e) => {
    if (!isNumber(directPage) || directPage < 1 || directPage > pageCount) {
      setDirectPage('');
    }
  }, [directPage, pageCount]);

  const changePageLimit = useCallback((value, e) => {
    if (!customizedLimit) {
      setLimit(value);
    }
    onChangeRows && onChangeRows(value, e);
  }, [customizedLimit, onChangeRows, setLimit]);

  const preBtn = useMemo(() => {
    return hasPrevButton &&
        <span className="item">
          <Button outline initOutlineColor hasOutlineBackground={false}
                  hasBox={false}
                  disabled={disablePreBtn}
                  onClick={(e) => goTo(currentPage - 1, e)}
                  type="primary"
                  {...buttonProps}>
            {renderPre ? renderPre() : <IconArrowLeft/>}
          </Button>
        </span>;
  }, [buttonProps, currentPage, disablePreBtn, goTo, hasPrevButton, renderPre]);

  const nextBtn = useMemo(() => {
    return hasNextButton &&
        <span className="item">
          <Button outline initOutlineColor hasOutlineBackground={false}
                  hasBox={false}
                  disabled={disableNextBtn}
                  onClick={(e) => goTo(currentPage + 1, e)}
                  type="primary"
                  {...buttonProps}>
             {renderPre ? renderPre() : <IconArrowRight/>}
          </Button>
        </span>;
  }, [
    buttonProps,
    currentPage,
    disableNextBtn,
    goTo,
    hasNextButton,
    renderPre]);

  console.log('update.....');
  const jumpTo = useCallback((e) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (!isNumber(directPage)) {
      setDirectPage('');
      return;
    }

    let targetPage = -1;
    if (directPage > pageCount) {
      targetPage = pageCount;
    }
    if (directPage <= 1) {
      targetPage = 1;
    }

    if (targetPage > -1) {
      setDirectPage(targetPage);
      goTo(targetPage, e);
    }
  }, [directPage, goTo, pageCount]);

  if (isInteger(pageCount) && pageCount <= 0) {
    return null;
  }

  if (simple) {
    const simpleClsName = clsx('simple-content', {compact: compact});
    return <div className="pagination" {...otherProps}>
      {preBtn}
      <div className={simpleClsName}>
        {
          hasGo &&
          <Tooltip body={directPage} disabled={isBlank(directPage)}>
            <Input value={isBlank(directPage) ? currentPage : directPage}
                   onChange={enterPage}
                   onKeyDown={jumpTo}
                   onBlur={updateDirectPage}/>
          </Tooltip>
        }
        {!hasGo && <span className="label">{currentPage}</span>}

        <span className="label">/</span>
        <span className="label">{pageCount}</span>
      </div>
      {nextBtn}
    </div>;
  }

  return <>
    <div className="pagination" {...otherProps}>
      {
        leftItems.map((item, index) => {
          return <span className="item" key={`left-${index}`}>
            {item}
          </span>;
        })
      }
      {preBtn}
      {firstPageItem}
      {prePagesItem}
      {
        otherPageItems.map((item, index) => {
          return <span className="item" key={`${item.value}-${index}`}>
            <Button active={item.active} outline initOutlineColor hasBox={false}
                    hasOutlineBackground={false}
                    onClick={(e) => goTo(item.value, e)}
                    type="primary"
                    {...buttonProps}>
              <span className="page-text">{item.value}</span>
            </Button>
          </span>;
        })
      }

      {nextPagesItem}
      {lastPageItem}
      {nextBtn}

      {
        hasPageLimits &&
        <Select defaultValue={limit} onSelect={changePageLimit}
                block={false} {...selectProps}>
          {
            pageLimits.map((value, index) => {
              const itemText = isNil(renderPageLimitItem) ? `${value}条 / 页` :
                  invoke(renderPageLimitItem, value);
              return <Select.Option value={value} key={`${value}-${index}`}
                                    text={itemText}/>;
            })
          }
        </Select>
      }

      {
        hasGo &&
        <span className="go-item">
          <InputGroup>
           <Button inverted type="primary"
                   onClick={(e) => goTo(directPage, e)}>跳至</Button>
            <Tooltip body={directPage} disabled={isBlank(directPage)}>
            <Input value={directPage} onChange={enterPage}
                   onKeyDown={jumpTo}
                   onBlur={updateDirectPage}/>
            </Tooltip>
          </InputGroup>
        </span>
      }
      {
        rightItems.map((item, index) => {
          return <span className="item" key={`right-${index}`}>
            {item}
          </span>;
        })
      }
    </div>
  </>;

});

export default Pagination;