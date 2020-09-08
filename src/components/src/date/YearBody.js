import React, {useContext} from 'react';
import Card from '../card';
import Row from '../grid/Row';
import Col from '../grid/Col';
import Button from '../button';
import DateTitle from './DateTitle';
import {DateContext} from '../common/Context';
import {isNil} from '../Utils';
import clsx from 'clsx';

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
        <div className="year-cols">
          <Row>
            <Col justify="center"><Button inverted type="primary">2019</Button></Col>
            <Col justify="center"><Button inverted type="primary">2020</Button></Col>
            <Col justify="center"><Button inverted type="primary">2021</Button></Col>
          </Row>
          <Row>
            <Col justify="center"><Button inverted type="primary">2019</Button></Col>
            <Col justify="center"><Button inverted type="primary">2020</Button></Col>
            <Col justify="center"><Button inverted type="primary">2021</Button></Col>
          </Row>
          <Row>
            <Col justify="center"><Button inverted type="primary">2019</Button></Col>
            <Col justify="center"><Button inverted type="primary">2020</Button></Col>
            <Col justify="center"><Button inverted type="primary">2021</Button></Col>
          </Row>
          <Row>
            <Col justify="center"><Button inverted type="primary">2019</Button></Col>
            <Col justify="center"><Button inverted type="primary">2020</Button></Col>
            <Col justify="center"><Button inverted type="primary">2021</Button></Col>
          </Row>
        </div>
      </Card.Row>
      <Card.Row>

      </Card.Row>
    </Card>
  </>;
});

export default YearBody;