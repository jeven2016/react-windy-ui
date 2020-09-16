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
import Row from '../grid/Row';
import Col from '../grid/Col';
import {DateContext} from '../common/Context';
import clsx from 'clsx';
import {isNumber} from '../Utils';
import {PickerPanel, usePanel, usePanelHead} from './DateUtils';

const YearRangesPanel = React.forwardRef((props, ref) => {
  const {setPanelType} = props;
  const ctx = useContext(DateContext);
  const {getState, setState, attach, detach} = ctx.store;
  const validDate = getState().getValidDate();
  const currentYear = validDate.get('year');
  const [startYear, setStartYear] = useState(currentYear);

  useEffect(() => {
    //update local state while the store is updated
    const listener = () => {
      const year = getState().initialDate.year;
      if (year !== startYear) {
        setStartYear(year);
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach, getState, startYear]);

  const dataPickerClsName = clsx('date-picker', {
    'left-title': ctx.leftTitle,
  });

  const yearRange = useMemo(() => {
    const stringYear = startYear + '';
    const lastNumber = stringYear.charAt(startYear.length - 1);
    let begin;
    let leftYear = stringYear.substring(0, stringYear.length - 1);
    if (!isNumber(lastNumber)) {
      begin = 0;
    } else {
      begin = parseInt(leftYear + '0');
    }
    const end = begin + 9;
    return {begin, end};
  }, [startYear]);

  const selectRange = useCallback((year) => {
    setState({initialDate: {...getState().initialDate, year: year}});
    setPanelType(PickerPanel.year);
  }, [getState, setPanelType, setState]);

  const yearRangeCnt = useMemo(() => {
    const rows = [];
    let j = 0;
    for (let i = 0; i < 4; i++) {
      const cols = [];
      for (let k = 0; k < 3; k++) {
        const year = yearRange.begin + j;
        j = j + 10;
        const col = <Col justify="center" key={`col-${year}`}
                         extraClassName={year >= yearRange.begin + 100
                             ? 'other-year'
                             : null}>
          <Button inverted initOutlineColor type="primary"
                  extraClassName="range-btn"
                  onClick={selectRange.bind(null, year)}>
            {year}-{year + 9}
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
  }, [currentYear, selectRange, startYear, yearRange.begin, yearRange.end]);

  const setPreRange = useCallback(() => {
    const preInitDate = getState().initialDate;
    setState({initialDate: {...preInitDate, year: preInitDate.year - 100}});
  }, [getState, setState]);

  const setNextRange = useCallback(() => {
    const preInitDate = getState().initialDate;
    setState({initialDate: {...preInitDate, year: preInitDate.year + 100}});
  }, [getState, setState]);

  return <>
    <Card extraClassName={dataPickerClsName}>
      <Card.Header extraClassName="date-picker-header">
        <DateTitle date={getState().activeDate} setPanelType={setPanelType}/>
      </Card.Header>
      <Card.Row>
        <div className="dp-body">
          <div className="date-picker-info">
          <span className="previous">
              <Button size="small" inverted circle onClick={setPreRange}>
               <IconArrowLeft/>
              </Button>
          </span>
            <span className="content">
             <span className="year-range">
                  {usePanelHead(`${yearRange.begin} - ${yearRange.end}`)}
             </span>
           </span>
            <span className="next">
              <Button size="small" inverted circle onClick={setNextRange}>
                <IconArrowRight/>
              </Button>
          </span>
          </div>
          {usePanel(yearRangeCnt)}
        </div>
      </Card.Row>
      <Card.Row>

      </Card.Row>
    </Card>
  </>;
});

export default YearRangesPanel;