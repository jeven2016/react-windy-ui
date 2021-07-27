import React from "react";
import {Skeleton, Row, Col, Card, List} from "react-windy-ui";

function SkeletonComponent() {
  return <Card block>
    <Card.Row>
      <Skeleton>
        <Skeleton.Item height={150}/>
        <List style={{marginTop: '1rem'}}>
          <List.Item
            compact
            type="panel"
            icon={<Skeleton.Item type="circle"/>}
            title={<Skeleton.Item width='40%' height={12}/>}
            description={<Skeleton.Item height={12}/>}
          />
        </List>
        <Skeleton.Item height={12}/>
        <Skeleton.Item height={12}/>
      </Skeleton>
    </Card.Row>
  </Card>
}


export default function Skeleton2() {
  return <>
    <Row gutter={{x: 8, y: 8}}>
      <Col xs={12} sm={4}>
        <SkeletonComponent/>
      </Col>
      <Col xs={12} sm={4}>
        <SkeletonComponent/>
      </Col>
      <Col xs={12} sm={4}>
        <SkeletonComponent/>
      </Col>
    </Row>

  </>;
};