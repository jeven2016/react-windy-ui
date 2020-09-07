import React, {useContext} from 'react';
import Card from '../card';
import Row from '../grid/Row';
import Col from '../grid/Col';
import Button from '../button';
import DateTitle from './DateTitle';
import {DateContext} from '../common/Context';
import {isNil} from '../Utils';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';

const YearBody = React.forwardRef((props, ref) => {
  const ctx = useContext(DateContext);
  const {getState} = ctx.store;
  const activeDate = getState().activeDate;

  const validDate = isNil(activeDate)
      ? getState().initialDate
      : activeDate;

  const dataPickerClsName = clsx('date-picker', {
    'left-title': ctx.leftTitle,
  });

  return <>
    <Card extraClassName={dataPickerClsName}>
      <Card.Header extraClassName="date-picker-header">
        <DateTitle hasTitle={ctx.hasTitle}
                   config={ctx.config}
                   date={validDate}
                   leftTitle={ctx.leftTitle}/>
      </Card.Header>
      <Card.Row>
        <SwipeableViews containerStyle={{ height: 270,
          WebkitOverflowScrolling: 'touch',}} axis="y" enableMouseEvents resistance onChangeIndex={(index)=> console.log(index)}>
          <div className="year-row">1920</div>
          <div className="year-row">1921</div>
          <div className="year-row">19202</div>
          <div className="year-row">19203</div>
          <div className="year-row">19204</div>
          <div className="year-row">19205</div>
          <div className="year-row">19206</div>
          <div className="year-row">19207</div>
          <div className="year-row">19208</div>
          <div className="year-row">19209</div>
          <div className="year-row">192011</div>
          <div className="year-row">192012</div>
          <div className="year-row">192013</div>
          <div className="year-row">192014</div>
          <div className="year-row">192015</div>
          <div className="year-row">192016</div>
          <div className="year-row">192017</div>
          <div className="year-row">192018</div>
          <div className="year-row">1920</div>
          <div className="year-row">1921</div>
          <div className="year-row">19202</div>
          <div className="year-row">19203</div>
          <div className="year-row">19204</div>
          <div className="year-row">19205</div>
          <div className="year-row">19206</div>
          <div className="year-row">19207</div>
          <div className="year-row">19208</div>
          <div className="year-row">19209</div>
          <div className="year-row">192011</div>
          <div className="year-row">192012</div>

          <div className="year-row">192013</div>
          <div className="year-row">192014</div>
          <div className="year-row">192015</div>
          <div className="year-row">192016</div>
          <div className="year-row">192017</div>
          <div className="year-row">192018</div>
        </SwipeableViews>
      </Card.Row>
      <Card.Row>

      </Card.Row>
    </Card>
  </>;
});

export default YearBody;