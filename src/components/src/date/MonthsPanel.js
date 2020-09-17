import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Card from '../card';
import DateTitle from './DateTitle';
import Button from '../button';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {DateContext} from '../common/Context';
import clsx from 'clsx';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {PickerPanel, usePanel, usePanelHead} from './DateUtils';
import dayjs from 'dayjs';
import {isNil} from '../Utils';

const MonthsPanel = React.forwardRef((props, ref) => {
  const {
    setPanelType,
  } = props;

  const ctx = useContext(DateContext);
  const {getState, setState, attach, detach} = ctx.store;
  const currentYear = getState().getValidDate().get('year');
  const [startYear, setStartYear] = useState(currentYear);

  console.log(startYear)
  useEffect(() => {
    const listener = ({activeDate}) => {
      if (!isNil(activeDate)) {
        setStartYear(activeDate.year());
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach]);

  const dataPickerClsName = clsx('date-picker', {
    'left-title': ctx.leftTitle,
  });

  const selectMonth = useCallback((month, e) => {
    const newInitDate = {
      initialDate: {
        ...getState().initialDate,
        month: month,
      },
    };
    if (ctx.type !== PickerPanel.month) {
      setPanelType(PickerPanel.date);
      setState(newInitDate);
    } else {
      const newActiveDate = dayjs().
          year(getState().initialDate.year).
          month(month);

      if (!ctx.customizedDate) {
        setState({
          activeDate: newActiveDate,
          ...newInitDate,
        });
      }
      ctx.tryClosePopup();
      ctx.onChange &&
      ctx.onChange(newActiveDate.format(ctx.getDateFormat()), newActiveDate);
    }
  }, [ctx, getState, setPanelType, setState]);

  const checkMonth = useCallback((month) => {
    const activeDate = ctx.activeDate;
    if (isNil(activeDate)) {
      return false;
    }
    console.log("="+month+", "+activeDate.month())
    return startYear === activeDate.year() && month === activeDate.month();
  }, [ctx.activeDate, startYear]);

  const monthCnt = useMemo(() => {
    const rows = [];

    let cols = [];
    for (let i = 0; i < 12; i++) {
      if (i !== 0 && i % 3 === 0) {
        rows.push(<Row key={'row-' + i}>{cols}</Row>);
        cols = [];
      }
      const col = <Col justify="center" key={`col-${i}`}>
        <Button inverted initOutlineColor type="primary"
                onClick={(e) => selectMonth(i, e)}
                active={checkMonth(i)}>
          {ctx.config.locale.month[i]}
        </Button>
      </Col>;
      cols.push(col);

      if (i === 11) {
        rows.push(<Row key={'row-' + i}>{cols}</Row>);
      }
    }
    return rows;
  }, [checkMonth, ctx.config.locale.month, selectMonth]);

  const setPreYear = useCallback((type) => {
    const preInitDate = getState().initialDate;
    const preYear = preInitDate.year - 1;
    setState({initialDate: {...preInitDate, year: preYear}});
    setStartYear(preYear);
  }, [getState, setState]);

  const setNextYear = useCallback(() => {
    const preInitDate = getState().initialDate;
    const nextYear = preInitDate.year + 1;
    setState({initialDate: {...preInitDate, year: nextYear}});
    setStartYear(nextYear);
  }, [getState, setState]);

  return <>
    <Card extraClassName={dataPickerClsName}>
      <DateTitle date={getState().activeDate} setPanelType={setPanelType}/>
      <Card.Row>
        <div className="dp-body">
          <div className="date-picker-info">
          <span className="previous">
              <Button size="small" inverted circle onClick={setPreYear}>
               <IconArrowLeft/>
              </Button>
          </span>
            <span className="content">
             <span className="year-range">
               {usePanelHead(startYear)}
             </span>
           </span>
            <span className="next">
              <Button size="small" inverted circle onClick={setNextYear}>
                <IconArrowRight/>
              </Button>
          </span>
          </div>
          {usePanel(monthCnt)}
        </div>
      </Card.Row>
      <Card.Row>

      </Card.Row>
    </Card>
  </>;
});

export default MonthsPanel;