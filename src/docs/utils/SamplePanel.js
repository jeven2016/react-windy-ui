import React, {useMemo, useState} from 'react';
import {
  Button,
  Card,
  Col,
  Collapse,
  Divider,
  IconEdit,
  Row,
  Tooltip,
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faCopy} from '@fortawesome/free-solid-svg-icons';
import markdown from './Markdown';
import Hcode from './Hcode';
import SandboxButton from './SandboxButton';
import {getEditUrl} from "./DocUtils";

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

  //the component don't need to render for multiple times
  const renderComp = useMemo(() => comp, [comp]);
  const DescMarkDown = markdown({text: desc, markdownOptions});
  const TitleMarkDwon = markdown({text: title, markdownOptions});

  const realEditUrl = useMemo(() => editUrl && getEditUrl(editUrl),
      [editUrl]);

  return <>
    <Card block hasBorder hasBox={false}>
      <Card.Row extraClassName="doc title-row">
        <Row align="center">
          <Col col={8}>
            <div id={id} className="doc title-col">
              <TitleMarkDwon/>
              {
                realEditUrl &&
                <span style={{color: 'rgb(158, 155, 155)'}}>
               <Button inverted circle size="small" nativeType="a"
                       href={realEditUrl} target="_blank">
                 <IconEdit/>
               </Button>
             </span>
              }
            </div>
          </Col>
          <Col col={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div>
              <Tooltip body="Source code">
                <span style={{color: 'rgb(158, 155, 155)'}}>
                <Button inverted circle size="small"
                        onClick={() => setCollapse(pre => !pre)}>
                  <FontAwesomeIcon icon={faCode}/>
                </Button>
                </span>
              </Tooltip>

              <Tooltip body="Test in CodeSandbox">
                <span
                    style={{color: 'rgb(158, 155, 155)', marginLeft: '.25rem'}}>
                    <SandboxButton/>
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
      <Card.Row>
        <DescMarkDown/>
      </Card.Row>
      <Card.Row>
        <Collapse.Panel collapse={collapse} heightIncrement={14}>
          <Hcode>{code}</Hcode>
        </Collapse.Panel>
      </Card.Row>
      <Card.Row>
      </Card.Row>
    </Card>

  </>;

}