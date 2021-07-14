import React, {useCallback, useContext, useMemo} from 'react';
import {isNil} from '../Utils';
import Col from '../grid/Col';
import Button from '../button';
import Row from '../grid/Row';
import {nextYear, PickerPanel, preYear, useCloseButton, usePanel, usePanelHead, useYearRange} from './DateUtils';
import Card from '../card';
import DateTitle from './DateTitle';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {DateContext} from '../common/Context';
import dayjs from 'dayjs';
import Divider from "../divider";

const YearsPanel = React.forwardRef((props, ref) => {
  const {
    date,
    tempDate,
    setTempDate,
    type,
    onChange,
    autoClose,
    tryClosePopup,
    locale,
    setPanelType,
    hasFooter
  } = useContext(DateContext);
  const [startYear, yearRange, currentYear] = useYearRange(date, tempDate);

  const selectYear = useCallback((year, e) => {
    const selectedDate = dayjs().year(year);
    if (type !== PickerPanel.year) {
      setPanelType(PickerPanel.month);
      setTempDate(pre => ({date: pre.date.year(year), changed: true}));
    } else {
      onChange(selectedDate, false, e);
    }
  }, [onChange, setPanelType, setTempDate, type]);

  const checkActive = useCallback((year) => year === currentYear, [currentYear]);

  const isGrayBtn = useCallback((year) => {
    const isActive = checkActive(year);
    return !isActive || isNil(date);
  }, [checkActive, date]);

  const yearsCnt = useMemo(() => {
    const rows = [];
    let j = 0;
    for (let i = 0; i < 4; i++) {
      const cols = [];
      for (let k = 0; k < 3; k++) {
        const year = yearRange.begin + j++;
        const col = <Col justify="center" key={`col-${year}`}
                         extraClassName={year > yearRange.end
                           ? 'other-year'
                           : null}>
          <Button
            hasBox={false}
            hasRipple={false}
            inverted={true}
            type={isGrayBtn(year) ? 'gray' : 'primary'}
            active={checkActive(year)}
            onClick={selectYear.bind(null, year)}>
            {year}
          </Button>
        </Col>;
        cols.push(col);
      }

      const row = <Row key={startYear + '' + i}>
        {cols}
      </Row>;
      rows.push(row);
    }
    return rows;
  }, [checkActive, isGrayBtn, selectYear, startYear, yearRange.begin, yearRange.end]);

  const setPreYear = useCallback(() => {
    setTempDate(pre => ({date: pre.date.year(preYear(startYear, 10)), changed: true}));
  }, [setTempDate, startYear]);

  const setNextYear = useCallback(() => {
    setTempDate(pre => ({date: pre.date.year(nextYear(startYear, 10)), changed: true}));
  }, [setTempDate, startYear]);

  const switchYear = useCallback(() => {
    setPanelType(PickerPanel.yearRange);
  }, [setPanelType]);

  const closeBtn = useCloseButton(autoClose, tryClosePopup, locale);

  return <>
    <Card extraClassName='date-picker' hasWidth={false} hasBox={false} ref={ref} {...props}>
      <DateTitle setPanelType={setPanelType}/>
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
               {usePanelHead(`${yearRange.begin} - ${yearRange.end}`,
                 switchYear)}
             </span>
           </span>
            <span className="next">
              <Button size="small" inverted circle onClick={setNextYear}>
                <IconArrowRight/>
              </Button>
          </span>
          </div>
          {usePanel(yearsCnt)}
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

export default YearsPanel;