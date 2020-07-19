import React, {useEffect, useMemo, useState} from 'react';
import {Button, Card, Col, Collapse, Row, Tooltip} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import markdown from './Markdown';

import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia as sty} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {jsx} from 'react-syntax-highlighter/dist/esm/languages/prism';

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

  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    // SyntaxHighlighter.registerLanguage('javascript', javascript);
    // SyntaxHighlighter.registerLanguage('sass', sass);
    // SyntaxHighlighter.registerLanguage('scss', scss);
  }, []);

  return <>
    <Card block hasBorder hasBox={false}>
      <Card.Row>
        <Row>
          <Col sm={8}>
            <div id={id}><TitleMarkDwon/></div>
          </Col>
          <Col sm={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div>
              <Tooltip body="Source code">
                <Button outline type="blue" extraClassName="clear-border"
                        onClick={() => setCollapse(pre => !pre)}>
                  <FontAwesomeIcon icon={faCode}/>
                </Button>
              </Tooltip>
            </div>
          </Col>
        </Row>
      </Card.Row>
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
          <SyntaxHighlighter
              customStyle={{fontSize: '.8rem'}}
              language="jsx"
              // showLineNumbers={true}
              startingLineNumber={0}
              style={sty}
              wrapLines={true}>
            {code}
          </SyntaxHighlighter>
        </Collapse.Panel>
      </Card.Row>
      <Card.Row>
      </Card.Row>
    </Card>

  </>;

}