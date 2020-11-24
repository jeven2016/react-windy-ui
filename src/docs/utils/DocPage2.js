import React, {useCallback, useContext, useMemo} from 'react';
import {loadMdFiles} from "./parseMd";
import Code from "./Code";
import DemoDesc from "./DemoDesc";
import Hcode from "./Hcode";
import {isNil} from "../../components/src/Utils";
import {compiler} from "markdown-to-jsx";
import SamplePanel from "./SamplePanel";
import {Blockquote, Button, IconEdit, StoreContext} from 'react-windy-ui';
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {getEditUrl} from "./DocUtils";

const Type = {
  sample: 'sample',
  text: 'text'
}

//convert the default component to customized component
const defaultOptions = {
  overrides: {
    IconEdit: {component: IconEdit},
    faEdit: {component: faEdit},
    Button: {component: Button},
    Code: {component: Code},
    DemoDesc: {component: DemoDesc},
    Blockquote: {component: Blockquote, props: {hasBox: true}},
    Hcode: {component: Hcode},
  },
};

export default function DocPage2(props) {
  const {
    requireMd,
    requireJs,
    requireCode,
    markdownOptions,
  } = props;
  const {locale} = useContext(StoreContext);
  const mdOpts = useMemo(() => {
    let mdOptions = defaultOptions;
    if (!isNil(markdownOptions) && !isNil(markdownOptions.overrides)) {
      mdOptions = {overrides: {...markdownOptions.overrides, ...mdOptions.overrides}};
    }
    return mdOptions;
  }, [defaultOptions, markdownOptions]);

  const result = useMemo(() => {
    const parseResult = loadMdFiles(requireMd, requireJs, requireCode);
    if (!parseResult) {
      return [];
    }
    return Object.keys(parseResult).sort((a, b) => {
      const orderA = parseResult[a].title.order;
      const orderB = parseResult[b].title.order;

      if ((!orderA && !orderB) || !orderB) {
        return true;
      }

      if (!orderA) {
        return false;
      }
      return parseInt(orderA) - parseInt(orderB);
    }).map(key => ({key: key, data: parseResult[key]}));
  }, [requireMd, requireJs]);

  //correct the real edit url
  const updateEditUrl = useCallback((text, editUrl) => {
    const content = text || '';
    if (!editUrl) {
      return content;
    }
    const realUrl = getEditUrl(editUrl);
    const btn = `<Button inverted circle size="small" nativeType="a" href="${realUrl}" target="_blank"><IconEdit/></Button>`;
    const val = content.replace('[editUrl]', btn);
    console.log(val)
    return val;
  }, []);

  return <>
    {
      result.map(comp => {
        if (comp.data.title?.type === Type.text) {
          return <section className="doc markdown" key={comp.key}>
            {compiler(updateEditUrl(comp.data.content[locale],
                comp.data.title.editUrl), mdOpts)}
          </section>
        }

        if (comp.data.title?.type === Type.sample) {
          return <SamplePanel
              key={comp.key}
              id={comp.key}
              editUrl={comp.data.title.editUrl}
              title={comp.data.title[locale]}
              comp={comp.data.component}
              code={comp.data.code}
              desc={comp.data.content[locale]}
              markdownOptions={mdOpts}/>;
        }
      })
    }
  </>;
}