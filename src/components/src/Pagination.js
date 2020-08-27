import React, {useCallback, useMemo, useState} from 'react';
import Button from "./button";
import {
  IconArrowLeft,
  IconArrowRight,
  IconLeftDoubleArrows,
  IconMore,
  IconRightDoubleArrows
} from "./Icons";
import Select from "./select";
import {isInteger, isNil} from "./Utils";
import useInternalState from "./common/useInternalState";

const PageButton = React.forwardRef((props, ref) => {
  const {left = true} = props;
  const [showIcon, setShow] = useState(false);

  const toggle = useCallback((value) => {
    setShow(value);
  }, [setShow]);

  const focus = useCallback(() => toggle(true), [toggle]);
  const blur = useCallback(() => toggle(false), [toggle]);

  const arrowIcon = left ? <IconLeftDoubleArrows style={{fontSize: '1em'}}/> :
      <IconRightDoubleArrows style={{fontSize: '1em'}}/>;

  return <Button outline initOutlineColor hasOutlineBackground={false}
                 onMouseOver={focus}
                 onMouseLeave={blur}
                 onFocus={focus}
                 onBlur={blur}
                 type="primary">
    {!showIcon && <IconMore/>}
    {showIcon && arrowIcon}
  </Button>
});

const Pagination = React.forwardRef((props, ref) => {
  const {
    siblingCount = 2,
    pageCount,
    page,
    defaultPage,
    hasPrevButton = true,
    hasNextButton = true,
    visiblePageCount = 5,
  } = props;

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

  const [basePage,setBasePage] = useState(currentPage); //the base page for calculate the number items to display

  const firstPageItem = useMemo(() => {
    return <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
          1
        </Button>
      </span>;
  }, []);

  const lastPageItem = useMemo(() => {
    return <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
          {pageCount}
        </Button>
      </span>;
  }, [pageCount]);

  const otherPageItems = useMemo(() => {
    const items = [];

    if (isNil(currentPage)) {
      const occupy = (2 * siblingCount + 1);
      const lastNumber = occupy > pageCount ? pageCount : occupy + 1;
      for (let i = 2; i < lastNumber; i++) {
        items.push({value: i, active: false});
      }
    } else {

      //start
      let start = 1;
      if (basePage - 1 > siblingCount) {
        start = basePage - siblingCount;
      }

      let end = 0;
      if (start === 1) {
        end = 2 * siblingCount + 1;
      } else {
        end = 2 * siblingCount + 1 + start;
      }

      if (end > pageCount) {
        end = pageCount;
      }

      for (let i = start; i < end; i++) {
        if (i === 1 || i === pageCount) {
          continue;
        }
        items.push(
            {value: i, active: !isNil(currentPage) && i === currentPage});
      }
    }

    /*
          let leftPageCount = 0;
          for (let i = siblingCount; i >= 1; i--) {
            const prePage = currentPage - i;
            if (prePage > 1) {
              leftPageCount++;
              items.push({value: prePage, active: false});
            }
          }
          items.push({value: currentPage, active: true});

          let rightPageCount = leftPageCount === siblingCount ? siblingCount
              : siblingCount - leftPageCount;
          for (let j = 1; j <= rightPageCount; j++) {
            const nextPage = currentPage + j;
            if (nextPage < pageCount) {
              items.push({value: nextPage, active: false});
            }
          }

        }
        console.log(items)*/

    return items;
  }, [basePage, siblingCount, currentPage, pageCount]);

  const prePagesItem = useMemo(() => {
    if (otherPageItems.length === 0 || otherPageItems[0].value - 1 === 1) {
      return null;
    }

    return <span className="item">
         <PageButton left={true}/>
        </span>;
  }, [otherPageItems]);

  const nextPagesItem = useMemo(() => {
    if (otherPageItems.length === 0
        || otherPageItems[otherPageItems.length - 1].value + 1 === pageCount) {
      return null;
    }

    return <span className="item">
           <PageButton left={false}/>
        </span>;
  }, [otherPageItems]);

  if (isInteger(pageCount) && pageCount <= 0) {
    return null;
  }

  return <>
    <div className="pagination">
      {
        hasPrevButton &&
        <span className="item">
          <Button outline initOutlineColor hasOutlineBackground={false}
                  type="primary">
              <IconArrowLeft/>
          </Button>
        </span>
      }
      {firstPageItem}
      {prePagesItem}
      {
        otherPageItems.map((item, index) => {
          return <span className="item" key={`${item.value}-${index}`}>
            <Button active={item.active} outline initOutlineColor
                    hasOutlineBackground={false}
                    type="primary">
              {item.value}
            </Button>
          </span>
        })
      }

      {nextPagesItem}
      {lastPageItem}
      {
        hasNextButton &&
        <span className="item">
          <Button outline initOutlineColor hasOutlineBackground={false}
                  type="primary">
              <IconArrowRight/>
          </Button>
        </span>
      }


      <Select defaultValue="10"
              onSelect={(value) => console.log(value)}>
        <Select.Option value="10">
          10条/页
        </Select.Option>
        <Select.Option value="20">
          20条/页
        </Select.Option>
        <Select.Option value="50">
          50条/页
        </Select.Option>
        <Select.Option value="100">
          100条/页
        </Select.Option>
      </Select>
    </div>
  </>;

});

export default Pagination;