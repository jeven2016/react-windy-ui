import React from 'react';
import {Button, Col, Popover, Row} from 'react-windy-ui';
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomeFooter() {
  return <div className="doc home-footer">
    <Row>
      <Col col={12} flexCol style={{fontSize: '.8rem'}}>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"
           style={{marginRight: '1rem'}}>苏ICP备18064205号</a>

        <Popover position="top" autoWidth body={<div>
          <p>Haha, you're so kind. </p>
          <p>Appreciate to access this project.</p>
          {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}
          {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}
          {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}
        </div>}>
          <Button color="white" outline size="small">我要捐助</Button>
        </Popover>
      </Col>
    </Row>
  </div>;
}