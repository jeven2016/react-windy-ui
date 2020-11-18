import React, {useMemo, useState} from 'react';
import {
  Button,
  Card,
  Col,
  Collapse,
  Divider,
  Row,
  Tooltip,
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faCopy, faEdit} from '@fortawesome/free-solid-svg-icons';
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
            <div id={id} className="doc title-col">
              <TitleMarkDwon/>
              <span style={{color: 'rgb(158, 155, 155)'}}>
               <Button inverted circle size="small"><FontAwesomeIcon
                   size="small" icon={faEdit}/></Button>
             </span>
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
                <Button inverted circle size="small">
                  <svg className="icon svg" style={{fontSize: '1em'}}
                       viewBox="0 0 1024 1024" fill="currentColor">
                      <path
                          d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"></path>
                    </svg>
                </Button>
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