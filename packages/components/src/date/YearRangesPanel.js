import React, { useCallback, useContext, useMemo } from 'react';
import Card from '../card';
import DateTitle from './DateTitle';
import Button from '../button';
import { IconArrowLeft, IconArrowRight } from '../Icons';
import Row from '../grid/Row';
import Col from '../grid/Col';
import { DateContext } from '../common/Context';
import {
  nextYear,
  PickerPanel,
  preYear,
  useCloseButton,
  usePanel,
  usePanelHead,
  useYearRange
} from './DateUtils';
import useEventCallback from '../common/useEventCallback';
import Divider from '../divider';

const YearRangesPanel = React.forwardRef((props, ref) => {
  const { hasFooter, date, tempDate, setTempDate, setPanelType, autoClose, tryClosePopup, locale } =
    useContext(DateContext);
  const [startYear, yearRange] = useYearRange(date, tempDate);

  const selectRange = useCallback(
    (year) => {
      setPanelType(PickerPanel.year);
      setTempDate((pre) => ({ date: pre.date.year(year), changed: true }));
    },
    [setPanelType, setTempDate]
  );

  const yearRangeCnt = useMemo(() => {
    const rows = [];
    let j = 0;
    for (let i = 0; i < 4; i++) {
      const cols = [];
      for (let k = 0; k < 3; k++) {
        const year = yearRange.begin + j;
        j = j + 10;
        const col = (
          <Col
            justify="center"
            key={`col-${year}`}
            extraClassName={year >= yearRange.begin + 100 ? 'other-year' : null}
          >
            <Button
              inverted
              initOutlineColor
              hasBox={false}
              extraClassName="range-btn"
              onClick={selectRange.bind(null, year)}
            >
              {year}-{year + 9}
            </Button>
          </Col>
        );
        cols.push(col);
      }

      const row = <Row key={startYear + '' + i}>{cols}</Row>;
      rows.push(row);
    }
    return rows;
  }, [selectRange, startYear, yearRange.begin]);

  const setPreRange = useEventCallback(() => {
    setTempDate((pre) => ({ date: pre.date.year(preYear(startYear)), changed: true }));
  });

  const setNextRange = useEventCallback(() => {
    setTempDate((pre) => ({ date: pre.date.year(nextYear(startYear)), changed: true }));
  });

  const closeBtn = useCloseButton(autoClose, tryClosePopup, locale);

  return (
    <>
      <Card extraClassName="date-picker" hasWidth={false} hasBox={false} ref={ref} {...props}>
        <DateTitle setPanelType={setPanelType} />
        <Card.Row>
          <div className="dp-body">
            <div className="date-picker-info">
              <span className="previous">
                <Button size="small" inverted circle onClick={setPreRange}>
                  <IconArrowLeft />
                </Button>
              </span>
              <span className="content">
                <span className="year-range">
                  {usePanelHead(`${yearRange.begin} - ${yearRange.end}`)}
                </span>
              </span>
              <span className="next">
                <Button size="small" inverted circle onClick={setNextRange}>
                  <IconArrowRight />
                </Button>
              </span>
            </div>
            {usePanel(yearRangeCnt)}
          </div>
        </Card.Row>
        {!autoClose && hasFooter && (
          <>
            <Divider />
            <Card.Footer extraClassName="date-picker-footer">
              <div className="left"></div>
              <div className="right">{closeBtn}</div>
            </Card.Footer>
          </>
        )}
      </Card>
    </>
  );
});

export default YearRangesPanel;
