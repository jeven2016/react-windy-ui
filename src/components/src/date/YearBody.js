import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import Card from '../card';
import Row from '../grid/Row';
import Col from '../grid/Col';
import Button from '../button';
import DateTitle from './DateTitle';
import {DateContext} from '../common/Context';
import {isNumber} from '../Utils';
import clsx from 'clsx';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {BodyType, YearPanelType} from './DateUtils';

const YearBody = React.forwardRef((props, ref) => {
  const ctx = useContext(DateContext);
  const {getState, setState, attach, detach} = ctx.store;
  const activeDate = getState().activeDate;

  const validDate = getState().getValidDate();

  const currentYear = validDate.get('year');

  //the start year of the year range
  const [startYear, setStartYear] = useState(currentYear);
  const [panelType, setPanelType] = useState(YearPanelType.year);

  //used to refresh this component
  const [refresh, setRefresh] = useState(false);

  const dataPickerClsName = clsx('date-picker', {
    'left-title': ctx.leftTitle,
  });

  useEffect(() => {
    const listener = () => {
      const storedDate = getState().getValidDate();
      //force this component to refresh while the date is changed in store
      if (!storedDate.isSame(validDate)) {
        setRefresh(pre => !pre);
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach, getState, validDate]);

  const selectYear = useCallback((year, e) => {
    setState({initialDate: {...getState().initialDate, year: year, date: 1}});
    setPanelType(YearPanelType.month);
  }, [getState, setState]);

  const selectMonth = useCallback((i, e) => {
    setState({initialDate: {...getState().initialDate, month: i, date: 1}});
    ctx.setBodyType(BodyType.day);
  }, [ctx, getState, setState]);

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

  //todo
  const yearRangeCnt = useCallback(() => {
    const rows = [];
    let j = 0;
    for (let i = 0; i < 4; i++) {
      const cols = [];
      for (let k = 0; k < 3; k++) {
        const year = yearRange.begin + j;
        j++;
        const col = <Col justify="center" key={`col-${year}`}
                         extraClassName={year > yearRange.end
                             ? 'other-year'
                             : null}>
          <Button inverted initOutlineColor type="primary"
                  active={year === currentYear}>
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
  }, [currentYear, startYear, yearRange.begin, yearRange.end]);

  const monthCnt = useMemo(() => {
    if (panelType !== YearPanelType.month) {
      return null;
    }
    const rows = [];

    let cols = [];
    for (let i = 0; i < 12; i++) {
      if (i !== 0 && i % 3 === 0) {
        rows.push(<Row key={'row-' + i}>{cols}</Row>);
        cols = [];
      }
      const col = <Col justify="center" key={`col-${i}`}
                       extraClassName={'other-year'}>
        <Button inverted initOutlineColor type="primary"
                onClick={(e) => selectMonth(i, e)}>
          {ctx.config.locale.month[i]}
        </Button>
      </Col>;
      cols.push(col);

      if (i === 11) {
        rows.push(<Row key={'row-' + i}>{cols}</Row>);
      }
    }
    return rows;
  }, [ctx.config.locale.month, panelType, selectMonth]);

  const setPreYear = useCallback((type) => {
    if (panelType === YearPanelType.year) {
      setStartYear(pre => pre - 10 < 0 ? 0 : pre - 10);
    }

    if (panelType === YearPanelType.month) {
      const preInitDate = getState().initialDate;
      setState({initialDate: {...preInitDate, year: preInitDate.year - 1}});
    }
  }, [panelType]);

  const setNextYear = useCallback(() => {
    if (panelType === YearPanelType.year) {
      setStartYear(pre => pre + 10 < 0 ? 0 : pre + 10);
    }
    if (panelType === YearPanelType.month) {
      const preInitDate = getState().initialDate;
      setState({initialDate: {...preInitDate, year: preInitDate.year + 1}});
    }
  }, [panelType]);

  return <>
    <Card extraClassName={dataPickerClsName}>
      <Card.Header extraClassName="date-picker-header">
        <DateTitle hasTitle={ctx.hasTitle}
                   config={ctx.config}
                   date={getState().activeDate}
                   leftTitle={ctx.leftTitle}/>
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
               {panelType === YearPanelType.month
                   ? getState().getValidDate().year() :
                   `${yearRange.begin} - ${yearRange.end}`}
             </span>
           </span>
            <span className="next">
              <Button size="small" inverted circle onClick={setNextYear}>
                <IconArrowRight/>
              </Button>
          </span>
          </div>
          <div className="year-cols">
            {panelType === YearPanelType.year && yearsCnt}
            {panelType === YearPanelType.yearRange && yearRangeCnt}
            {monthCnt}
          </div>
        </div>
      </Card.Row>
      <Card.Row>

      </Card.Row>
    </Card>
  </>;
});

export default YearBody;