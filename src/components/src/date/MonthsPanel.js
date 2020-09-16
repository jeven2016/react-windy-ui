import React, {useCallback, useContext, useMemo, useState} from 'react';
import Card from '../card';
import DateTitle from './DateTitle';
import Button from '../button';
import {IconArrowLeft, IconArrowRight} from '../Icons';
import {DateContext} from '../common/Context';
import clsx from 'clsx';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {PickerPanel, usePanel, usePanelHead} from './DateUtils';

const MonthsPanel = React.forwardRef((props, ref) => {
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

  const selectMonth = useCallback((i, e) => {
    setState({initialDate: {...getState().initialDate, month: i, date: 1}});
    setPanelType(PickerPanel.date);
  }, [getState, setPanelType, setState]);

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
  }, [ctx.config.locale.month, selectMonth]);

  const setPreYear = useCallback((type) => {
    const preInitDate = getState().initialDate;
    setState({initialDate: {...preInitDate, year: preInitDate.year - 1}});
  }, [getState, setState]);

  const setNextYear = useCallback(() => {
    const preInitDate = getState().initialDate;
    setState({initialDate: {...preInitDate, year: preInitDate.year + 1}});
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
              <Button size="small" inverted circle onClick={setPreYear}>
               <IconArrowLeft/>
              </Button>
          </span>
            <span className="content">
             <span className="year-range">
               {usePanelHead(validDate.year())}
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