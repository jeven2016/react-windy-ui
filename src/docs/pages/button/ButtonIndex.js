import React, {useContext} from 'react';
import markdown from '../../utils/Markdown';
import {LanguageContext} from '../../utils/Context';
import intl from 'react-intl-universal';
import SampleBtn1 from './SampleBtn1';
import {Card} from 'react-windy-ui';

export default function ButtonIndex(props) {
  const {language} = useContext(LanguageContext);
  const Introduction = markdown({
    importFunc: () =>
        import(`./button-title-${language}.md`),
  });
  return <>
    <section className="doc markdown">
      <Introduction/>
    </section>
    <section onChange="doc sample-container">
      <section>
        <Card block hasBorder hasBox={false}>
          <Card.Row>
            <h3 id="s1">示例1: 普通按钮</h3>
            <div className="doc comp-container">
              <SampleBtn1/>
            </div>
          </Card.Row>
        </Card>

      </section>
    </section>
  </>;

}