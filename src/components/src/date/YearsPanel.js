import React, {useCallback, useContext, useMemo, useState} from 'react';
import {isNumber} from '../Utils';
import Col from '../grid/Col';
import Button from '../button';
import Row from '../grid/Row';
import {PickerPanel, usePanel, usePanelHead} from './DateUtils';
import Card from '../card';
import DateTitle from './DateTitle';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {DateContext} from '../common/Context';
import clsx from 'clsx';

const YearsPanel = React.forwardRef((props, ref) => {
  const {
    setPanelType,
  } = props;

  const ctx = useContext(DateContext);
  const {getState, setState} = ctx.store;
  const validDate = getState().getValidDate();
  const currentYear = validDate.get('year');
  const [startYear, setStartYear] = useState(currentYear);

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

  const selectYear = useCallback((year, e) => {
    setState({initialDate: {...getState().initialDate, year: year, date: 1}});
    setPanelType(PickerPanel.month);
  }, [getState, setPanelType, setState]);

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
          <Button inverted initOutlineColor type="primary"
                  active={year === currentYear}
                  onClick={(e) => selectYear(year, e)}>
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
  }, [currentYear, selectYear, startYear, yearRange.begin, yearRange.end]);

  const setPreYear = useCallback((type) => {
    setStartYear(pre => pre - 10 < 0 ? 0 : pre - 10);
  }, []);

  const setNextYear = useCallback(() => {
    setStartYear(pre => pre + 10 < 0 ? 0 : pre + 10);
  }, []);

  const switchYear = useCallback(() => {
    setPanelType(PickerPanel.yearRange);
  }, [setPanelType]);

  return <>
    <Card extraClassName={dataPickerClsName}>
      <Card.Header extraClassName="date-picker-header">
        <DateTitle date={getState().activeDate} setPanelType={setPanelType}/>
      </Card.Header>
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
      <Card.Row>

      </Card.Row>
    </Card>
  </>;

});

export default YearsPanel;