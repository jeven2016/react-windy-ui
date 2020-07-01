import React, {useContext} from 'react';
import {LanguageContext} from './Context';
import useMarkdownFile from './useMarkdownFile';
import markdown from './Markdown';
import SamplePanel from './SamplePanel';
import {isNil} from '../../components/src/Utils';

const defaultTitle = 'TITLE';
const defaultFooter = 'FOOTER';
const defaultDocKeys = [defaultTitle, defaultFooter];

export default function DocPage(props) {
  const {language} = useContext(LanguageContext);
  const {
    importFunc,
    componentMapping: compMapping,
    codePrefix = '```jsx',
    codeSuffix = '```',
  } = props;

  if (isNil(compMapping)) {
    throw new Error('the componentMapping should be specified');
  }

  const keyArray = [...defaultDocKeys, ...Object.keys(compMapping)];

  //import the markdown file and parse the text by the tags mapping relationship
  const contentMap = useMarkdownFile({
    importFunc,
    language,
    keys: keyArray,
  });
  const Title = markdown({text: contentMap.get(defaultTitle)});
  const Footer = markdown({text: contentMap.get(defaultFooter)});
  return <>

    {Title && <section className="doc markdown"><Title/></section>}

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
              desc={desc}/>;
        })
      }

    </div>
    <section className="doc markdown footer">
      {Footer && <div style={{marginTop: '2rem'}}><Footer/></div>}
    </section>
  </>;

}