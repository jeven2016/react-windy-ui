import React, {useCallback, useContext, useMemo,} from 'react';
import Card from '../card';
import DateTitle from './DateTitle';
import Button from '../button';
import {DateContext} from '../common/Context';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {getDisplayDate, PickerPanel, useCloseButton, usePanel, usePanelHead} from './DateUtils';
import {isNil} from "../Utils";
import useEventCallback from "../common/useEventCallback";
import Divider from "../divider";

const MonthsPanel = React.forwardRef((props, ref) => {
  const {
    hasFooter = true,
  } = props;

  const {
    date,
    tempDate,
    setTempDate,
    type,
    onChange,
    config,
    setPanelType,
    autoClose,
    tryClosePopup,
  } = useContext(DateContext);

  const currDate = useMemo(() => getDisplayDate(date, tempDate), [date, tempDate]);
  const startYear = currDate.year();
  const currMonth = currDate.month();

  const selectMonth = useCallback((month, e) => {
    if (type !== PickerPanel.month) {
      setPanelType(PickerPanel.date);
      setTempDate(pre => ({date: pre.date.month(month), changed: true}));
    } else {
      onChange(currDate.month(month), false, e);
    }
  }, [currDate, onChange, setPanelType, setTempDate, type]);

  const checkMonth = useCallback((month) => {
    const isSameMonth = month === currMonth;
    return isNil(date) ? isSameMonth : date.year() === currDate.year() && isSameMonth;
  }, [currDate, currMonth, date]);

  const isGrayBtn = useCallback((month) => {
    const isActive = checkMonth(month);
    return !isActive || isNil(date);
  }, [checkMonth, date]);

  const monthCnt = useMemo(() => {
    const rows = [];

    let cols = [];
    for (let i = 0; i < 12; i++) {
      if (i > 0 && i % 3 === 0) {
        rows.push(<Row key={'row-' + i}>{cols}</Row>);
        cols = [];
      }
      const col = <Col justify="center" key={`col-${i}`}>
        <Button inverted initOutlineColor type={isGrayBtn(i) ? 'gray' : 'primary'}
                onClick={(e) => selectMonth(i, e)}
                active={checkMonth(i)}>
          {config.locale.month[i]}
        </Button>
      </Col>;
      cols.push(col);

      if (i === 11) {
        rows.push(<Row key={'row-' + i}>{cols}</Row>);
      }
    }
    return rows;
  }, [checkMonth, config.locale.month, isGrayBtn, selectMonth]);

  console.log(monthCnt)

  const changeYear = useEventCallback(() => {
    setPanelType(PickerPanel.year);
  });

  const closeBtn = useCloseButton(autoClose, tryClosePopup, config);

  return <>
    <Card extraClassName='date-picker' hasWidth={false} hasBox={false}>
      <DateTitle setPanelType={setPanelType}/>
      <Card.Row>
        <div className="dp-body">
          <div className="date-picker-info">
            <span className="previous"/>
            <span className="content">
             <span className="year-range">
               {usePanelHead(startYear, changeYear)}
             </span>
           </span>
            <span className="next"/>
          </div>
          {usePanel(monthCnt)}
        </div>
      </Card.Row>
      {
        !autoClose && hasFooter && <>
          <Divider/>
          <Card.Footer extraClassName="date-picker-footer">
            <div className="left">
            </div>
            <div className="right">
              {closeBtn}
            </div>
          </Card.Footer>
        </>
      }
    </Card>
  </>;
});

export default MonthsPanel;