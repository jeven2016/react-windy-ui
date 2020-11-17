import React, {useMemo, useState} from 'react';
import {
  Button,
  Card,
  Col,
  Collapse,
  Row,
  Tooltip,
  Divider,
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import markdown from './Markdown';
import Hcode from './Hcode';

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
  const {id, title, comp, code, desc, markdownOptions} = props;
  const [collapse, setCollapse] = useState(true);

  //the component don't need to render for multiple times
  const renderComp = useMemo(() => comp, [comp]);

  const DescMarkDown = markdown({text: desc, markdownOptions});
  const TitleMarkDwon = markdown({text: title, markdownOptions});

  return <>
    <Card block hasBorder hasBox={false}>
      <Card.Row extraClassName="doc title-row">
        <Row align="center">
          <Col col={8}>
            <div id={id}><TitleMarkDwon/></div>
          </Col>
          <Col col={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div>
              <Tooltip body="Source code">
                <span style={{color: 'rgb(158, 155, 155)'}}>
                <Button inverted type="blue" extraClassName="clear-border"
                        onClick={() => setCollapse(pre => !pre)}>
                  <FontAwesomeIcon icon={faCode}/>
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