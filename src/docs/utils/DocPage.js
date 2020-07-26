import React, {useContext} from 'react';
import {LanguageContext} from './Context';
import useMarkdownFile from './useMarkdownFile';
import markdown from './Markdown';
import SamplePanel from './SamplePanel';
import {isNil} from '../../components/src/Utils';
import DemoDesc from './DemoDesc';
import Code from './Code';
import Blockquote from '../../components/src/Blockquote';

const defaultTitle = 'TITLE';
const defaultFooter = 'FOOTER';
const defaultDocKeys = [defaultTitle, defaultFooter];

const prefix = '```';
const convertCode = (text) => {
  if (text.indexOf(prefix) > -1) {
    var reg = /(`){3}[\n|\s]*(.*?)(`){3}/g;
    var results = reg.exec(text);

    if (results.length > 0 && !isNil(results[2])) {
      return results[2];
    }
  }
  return text;
};

const defaultOptions = {
  overrides: {
    Code: {component: Code},
    DemoDesc: {component: DemoDesc},
    Blockquote: {component: Blockquote},
  },
};

export default function DocPage(props) {
  const {language} = useContext(LanguageContext);
  const {
    importFunc,
    componentMapping: compMapping,
    codePrefix = '```jsx',
    codeSuffix = '```',
    markdownOptions,
  } = props;

  if (isNil(compMapping)) {
    throw new Error('the componentMapping should be specified');
  }

  let mdOptions = defaultOptions;
  if (!isNil(markdownOptions) && !isNil(markdownOptions.overrides)) {
    mdOptions = {overrides: {...markdownOptions.overrides, ...mdOptions.overrides}};
  }

  const keyArray = [...defaultDocKeys, ...Object.keys(compMapping)];

  //import the markdown file and parse the text by the tags mapping relationship
  const contentMap = useMarkdownFile({
    importFunc,
    language,
    keys: keyArray,
  });
  const Title = markdown(
      {text: contentMap.get(defaultTitle), markdownOptions: mdOptions});
  const Footer = markdown(
      {text: contentMap.get(defaultFooter), markdownOptions: mdOptions});

  return <>

    {Title && <section className="doc markdown">
      <Title/>
    </section>}

    <div className="doc sample-container">
      {
        Object.entries(compMapping).map(([key, comp], index) => {
          let title = '';
          let desc = '';
          let sourceCode = '';
          let titleEndIndex = 0;
          const text = contentMap.get(key);
          if (text && !/^\s*$/.test(text)) {

            //parse the title
            const titleTagIndex = text.indexOf('###');
            if (titleTagIndex > -1) {
              titleEndIndex = text.indexOf('\n', titleTagIndex);
              title = text.substring(titleTagIndex,
                  text.indexOf('\n', titleEndIndex));
            }

            //parse the sample code
            const codeIndex = text.indexOf(codePrefix);
            if (codeIndex > -1) {
              sourceCode = text.substring(codeIndex + codePrefix.length,
                  text.indexOf(codeSuffix, codeIndex + codePrefix.length));
            }

            //parse the description
            desc = text.substring(titleEndIndex,
                codeIndex < 0 ? text.lenght : codeIndex);

          }
          return <SamplePanel
              key={`s-${index}`}
              id={key}
              title={title}
              comp={comp}
              code={sourceCode}
              desc={desc}
              markdownOptions={mdOptions}/>;
        })
      }

    </div>
    <section className="doc markdown footer">
      {Footer && <div style={{marginTop: '1rem'}}>
        <Footer/>
      </div>}
    </section>
  </>;

}