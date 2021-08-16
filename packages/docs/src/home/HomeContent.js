import React, {useContext} from 'react';
import intl from 'react-intl-universal';
import {Button, Col, Row} from 'react-windy-ui';
import HomeHeader from './HomeHeader';
import HomeIcon from './HomeIcon';
import jetbrains from '../style/imgs/jetbrains.png';
import {DocThemeContext} from "../common/DocConstants";

export default function HomeContent() {
  const {theme} = useContext(DocThemeContext);

  return <>
    <div className="doc home">
      <div className="banner-container">
        <HomeHeader transparent/>
        <div className="banner"
        >
          <div className="title text color-white">
            <HomeIcon style={{
              fontSize: '3rem',
            }}/>
            <div style={{
              display: 'inline-block',
              paddingLeft: '1rem',
            }}>Windy UI
            </div>
          </div>
          <div className="content">
            {intl.get('global.home.content')}
          </div>

          <div className="line">
            <Button nativeType="a" href={`#/docs/${theme}`} type="white" size="large"
                    hasMinWidth hasOutlineBackground={false}
                    outline
                    invertedOutline>
              {intl.get('global.home.button.start')}
            </Button>

            <Button nativeType="a"
                    href="https://github.com/jeven2016/react-windy-ui"
                    size="large" type="white"
                    hasMinWidth
                    hasOutlineBackground={false} outline
                    invertedOutline>
              {intl.get('global.home.button.github')}
            </Button>
          </div>
          <div className="line">
            <Row>
              <Col xs={12} sm={6} smOffset={3}>
                <Row>
                  <Col style={{alignItems: 'center'}} justify="center">
                    <a href='https://www.jetbrains.com/?from=react-windy-ui'>
                      <img src={jetbrains} width="70px" alt="jetbrains log"/>
                    </a>
                    <h5>Thank JetBrains' support on our project</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="line"/>

        </div>
      </div>
    </div>

  </>;

}