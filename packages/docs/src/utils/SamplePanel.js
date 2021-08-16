import React, {useCallback, useContext, useMemo, useRef, useState} from 'react';
import {Button, Card, Col, Collapse, Divider, IconEdit, Row, Tooltip, useEvent,} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faCopy} from '@fortawesome/free-solid-svg-icons';
import markdown from './Markdown';
import Hcode from './Hcode';
import SandboxButton from './SandboxButton';
import {getEditUrl, QuickManuContext} from './DocUtils';
import {EventListener} from "react-windy-ui/src/common/Constants";
import {DocThemeContext} from "../common/DocConstants";

/**
 * With markdownOptions , you can directly load a react component in markdwon file
 * markdownOptions ={
            overrides: {
                h1: {
                    component: MyParagraph,
                    props: {
                        className: 'foo',
                    },
                },
                DatePicker: {
                    component: DatePicker,
                },
            },
        }
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function SamplePanel(props) {
  const {id, title, comp, code, desc, markdownOptions, editUrl} = props;
  const [collapse, setCollapse] = useState(true);
  const ref = useRef(null);

  const ctx = useContext(QuickManuContext);
  const {quickManuStore} = ctx;

  //the component don't need to render for multiple times
  const renderComp = useMemo(() => comp, [comp]);
  const DescMarkDown = markdown({text: desc, markdownOptions});
  const TitleMarkDwon = markdown({text: title, markdownOptions});

  const realEditUrl = useMemo(() => editUrl && getEditUrl(editUrl),
    [editUrl]);

  //todo
  const scroll = useCallback((e) => {
    const cardRect = ref.current.getBoundingClientRect();
    if (cardRect.top <= 112 && cardRect.top >= 73) {
      // quickManuStore.updateState({id: id});
      // quickManuStore.notifyChanges();
      // console.log("setId=" + id)
    }
  }, []);

  useEvent(EventListener.scroll, scroll, true, window);
  const {theme} = useContext(DocThemeContext);

  return <>
    <Card block hasBorder hasBox={false} ref={ref}>
      <Card.Row extraClassName={`doc title-row ${theme}`}>
        <Row align="center">
          <Col col={6}>
            <div id={id} className="doc title-col">
              <TitleMarkDwon/>
              {
                realEditUrl &&
                <Tooltip body="Edit">
                <span style={{color: 'rgb(158, 155, 155)'}}>
               <Button inverted circle size="small" nativeType="a"
                       href={realEditUrl} target="_blank">
                 <IconEdit extraClassName="doc edit-btn"/>
               </Button>
             </span>
                </Tooltip>
              }
            </div>
          </Col>
          <Col col={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div>
              <Tooltip body="Source code">
                <span style={{color: 'rgb(158, 155, 155)'}}>
                <Button inverted circle size="small"
                        onClick={() => setCollapse(pre => !pre)}>
                  <FontAwesomeIcon icon={faCode}/>
                </Button>
                </span>
              </Tooltip>

              <Tooltip body="Run in CodeSandbox">
                <span
                  style={{color: 'rgb(158, 155, 155)', marginLeft: '.25rem'}}>
                    <SandboxButton code={code}/>
                </span>
              </Tooltip>

              <Tooltip body="Copy code">
                <span
                  style={{color: 'rgb(158, 155, 155)', marginLeft: '.25rem'}}>
                <Button inverted circle size="small">
                  <FontAwesomeIcon icon={faCopy}/>
                </Button>
                </span>
              </Tooltip>
            </div>
          </Col>
        </Row>
      </Card.Row>
      <Divider/>
      <Card.Row>
        <div className="doc comp-container" id="SampleBtn1">
          <div className="doc btn-area">
            {renderComp}
          </div>
        </div>
      </Card.Row>
      <Card.Row extraClassName="doc desc-row">
        <DescMarkDown/>
      </Card.Row>
      <Card.Row>
        <Collapse.Panel collapse={collapse} heightIncrement={14}>
          <Hcode>{code}</Hcode>
        </Collapse.Panel>
      </Card.Row>
    </Card>

  </>;

}