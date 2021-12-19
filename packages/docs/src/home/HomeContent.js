import React, {useContext} from 'react';
import intl from 'react-intl-universal';
import {Button, Col, Popover, Row} from 'react-windy-ui';
import HomeHeader from './HomeHeader';
import HomeIcon from './HomeIcon';
import jetbrains from '../style/imgs/jetbrains.png';
import {DocThemeContext} from "../common/DocConstants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons";

export default function HomeContent() {
  const {theme} = useContext(DocThemeContext);

  return <>
    <div className={`doc home ${theme}`}>
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

          <div className="line foot-line">
            <Row>
              <Col col={12} flexCol style={{fontSize: '.8rem'}}>
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"
                   style={{marginRight: '1rem'}}>苏ICP备18064205号</a>

                {/*<Popover position="top" autoWidth body={<div>*/}
                {/*  <p>Haha, you're so kind. </p>*/}
                {/*  <p>Appreciate to access this project.</p>*/}
                {/*  {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}*/}
                {/*  {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}*/}
                {/*  {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}*/}
                {/*</div>}>*/}
                {/*  /!*<Button color="white" outline size="small">我要捐助</Button>*!/*/}
                {/*  <Button type="white" size="small"*/}
                {/*          hasMinWidth*/}
                {/*          hasOutlineBackground={false} outline*/}
                {/*          invertedOutline>*/}
                {/*    我要捐助*/}
                {/*  </Button>*/}
                {/*</Popover>*/}
              </Col>
            </Row>
          </div>

        </div>
      </div>
    </div>

  </>;

}