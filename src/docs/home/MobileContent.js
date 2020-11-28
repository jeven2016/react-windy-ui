import React from 'react';
import DeviceImage from '../images/home-device.png';
import {Col, Row} from 'react-windy-ui';
import intl from 'react-intl-universal';

export default function MobileContent() {

  return <>

    <div className="doc normal-panel">
      <Row>
        <Col xsOffset={1} xs={10} smOffset={2} sm={8}
             style={{
               display: 'flex',
               justifyContent: 'center',
               flexDirection: 'column',
             }}>
          <h2>{intl.get('global.home.desc1')}</h2>
          <img src={DeviceImage} width='100%' onClick={() => false}/>
        </Col>
      </Row>
    </div>

  </>;

}