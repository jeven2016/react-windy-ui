import React, {useCallback} from 'react';
import clsx from 'clsx';
import Card from '../card';
import {Button, IconArrowLeft, IconArrowRight} from '../index';
import {IconLeftDoubleArrows, IconRightDoubleArrows} from '../Icons';
import {createDateColumns} from './DateConfig';
import {slice} from '../Utils';
import DateTitle from './DateTitle';

export default function DayBody(props) {
  const {
    date,
    leftTitle,
    config,
    autoClose,
    columnCount,
    hasTitle,
  } = props;

  const month = date.month();
  const year = date.year();

  const dataPickerClsName = clsx('date-picker', {
    'left-title': leftTitle,
  });

  const generateDays = useCallback((momentDate) => {
    let columns = createDateColumns(momentDate, columnCount, () => {}, null,
        momentDate, autoClose, () => {});

    return (
        <tbody>
        <tr>{slice(columns, 0, 7)}</tr>
        <tr>{slice(columns, 7, 14)}</tr>
        <tr>{slice(columns, 14, 21)}</tr>
        <tr>{slice(columns, 21, 28)}</tr>
        <tr>{slice(columns, 28, 35)}</tr>
        <tr>{slice(columns, 35, 42)}</tr>
        </tbody>
    );
  }, [autoClose, columnCount]);

  return <Card extraClassName={dataPickerClsName}>
    <Card.Header extraClassName="date-picker-header">
      <DateTitle hasTitle={hasTitle}
                 config={config}
                 date={date}
                 leftTitle={leftTitle}/>
    </Card.Header>

    <Card.Row>
      <div className="date-picker-info">
          <span className="previous">
             <Button size="small" inverted circle>
                 <IconLeftDoubleArrows/>
              </Button>
              <Button size="small" inverted circle>
               <IconArrowLeft/>
              </Button>
          </span>
        <span className="content">
          {config.locale.monthDetails[month]} {year}
        </span>
        <span className="next">
              <Button size="small" inverted circle>
                <IconArrowRight/>
              </Button>
              <Button size="small" inverted circle>
                <IconRightDoubleArrows/>
              </Button>
          </span>
      </div>
    </Card.Row>
    <Card.Body extraClassName="date-picker-body">
      <table className="date-picker-table">
        <thead>
        <tr>
          {config.locale.days.map(
              (day, index) => <th key={day + index}>{day}</th>)}
        </tr>
        </thead>
        {
          generateDays(date)
        }
      </table>

    </Card.Body>
    <Card.Footer extraClassName="date-picker-footer">
      <div className="left">
        Select Time
      </div>
      <div className="right">
        {!autoClose ?
            <Button type="primary" size="small" inverted circle>OK</Button>
            : null
        }
      </div>
    </Card.Footer>
  </Card>;
}