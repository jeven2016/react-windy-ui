import React from "react";
import {Row, Col, Card} from "react-windy-ui";

export default function Contributors() {

  return <>
    <Card block hasBox={false} hasBorder={false}>
      <Row gutter={{y: 16}}>
        <Col col={2} style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://avatars.githubusercontent.com/u/21193241?v=4" style={{borderRadius: "50%"}}
               width={50} height={50} alt="Contributor"/>
        </Col>
        <Col col={10}>
          <h3>Jeven Wang</h3>
          <h5 className="text comment">Leader of this project</h5>
        </Col>
      </Row>
      <Row gutter={{y: 16}}>
        <Col col={2} style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://avatars.githubusercontent.com/u/39116340?v=4" style={{borderRadius: "50%"}}
               width={50} height={50} alt="Contributor"/>
        </Col>
        <Col col={10}>
          <h3>Virgil Zhang</h3>
          <h5 className="text comment">Contributor</h5>
        </Col>
      </Row>
      {/*<Row gutter={{y: 16}}>
        <Col col={2} style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://avatars.githubusercontent.com/u/21193241?v=4" style={{borderRadius: "50%"}}
               width={50} height={50} alt="Contributor"/>
        </Col>
        <Col col={10}>
          <h3>Jun Ding</h3>
          <h5 className="text comment">Contributor</h5>
        </Col>
      </Row>
      <Row gutter={{y: 16}}>
        <Col col={2} style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://avatars.githubusercontent.com/u/31395637?v=4" alt="Contributor"
               style={{borderRadius: "50%"}}
               width={50} height={50}/>
        </Col>
        <Col col={10}>
          <h3>Jasmine Liu</h3>
          <h5 className="text comment">Contributor</h5>
        </Col>
      </Row>*/}
    </Card>
  </>;
}