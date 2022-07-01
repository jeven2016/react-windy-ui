import React, { useCallback, useContext, useLayoutEffect, useMemo } from 'react';
import { loadMdFiles } from './parseMd';
import { isNil } from 'lodash';
import { compiler } from 'markdown-to-jsx';
import SamplePanel from './SamplePanel';
import { StoreContext } from 'react-windy-ui';
import { defaultMarkdownOptions, getEditUrl, QuickManuContext } from './DocUtils';
import { DocThemeContext } from '../common/DocConstants';

const Type = {
  sample: 'sample',
  text: 'text'
};

export default function DocPage2(props) {
  const { requireMd, requireJs, requireCode, markdownOptions } = props;
  const { theme } = useContext(DocThemeContext);
  const { locale } = useContext(StoreContext);
  const mdOpts = useMemo(() => {
    let mdOptions = defaultMarkdownOptions;
    if (!isNil(markdownOptions) && !isNil(markdownOptions.overrides)) {
      mdOptions = { overrides: { ...markdownOptions.overrides, ...mdOptions.overrides } };
    }
    return mdOptions;
  }, [markdownOptions]);

  const result = useMemo(() => {
    const parseResult = loadMdFiles(requireMd, requireJs, requireCode);
    if (!parseResult) {
      return [];
    }
    return Object.keys(parseResult)
      .sort((a, b) => {
        const orderA = parseResult[a].title.order;
        const orderB = parseResult[b].title.order;

        if ((!orderA && !orderB) || (orderA && !orderB)) {
          return -1;
        }

        if (!orderA && orderB) {
          return 1;
        }

        if (!orderA) {
          return false;
        }
        return parseFloat(orderA) - parseFloat(orderB);
      })
      .map((key) => ({ key: key, data: parseResult[key] }));
  }, [requireMd, requireJs, requireCode]);

  //correct the real edit url
  const updateEditUrl = useCallback((text, editUrl) => {
    const content = text || '';
    if (!editUrl) {
      return content;
    }
    const realUrl = getEditUrl(editUrl);
    const btn = `<Button inverted circle size="small" nativeType="a" href="${realUrl}" target="_blank"><IconEdit extraClassName="doc edit-btn"/></Button>`;
    return content.replace('[editUrl]', btn);
  }, []);

  //update the QuickManu on right side
  const ctx = useContext(QuickManuContext);
  const { quickManuStore } = ctx;
  useLayoutEffect(() => {
    const menuList = [];
    result.forEach(({ key, data }) => {
      const text = data.title[locale];
      if (key && text) {
        menuList.push({ id: key, key: key, text });
      }
    });

    setTimeout(() => quickManuStore.setState({ list: menuList }), 500);
  }, [locale, result, quickManuStore]);

  return (
    <>
      {result.map((comp) => {
        if (comp.data.title?.type === Type.text) {
          return (
            <section className={`doc markdown ${theme}`} key={comp.key} id={comp.key}>
              {compiler(updateEditUrl(comp.data.content[locale], comp.data.title.editUrl), mdOpts)}
            </section>
          );
        }

        if (comp.data.title?.type === Type.sample) {
          return (
            <SamplePanel
              key={comp.key}
              id={comp.key}
              editUrl={comp.data.title.editUrl}
              title={comp.data.title[locale]}
              comp={comp.data.component}
              code={comp.data.code}
              desc={comp.data.content[locale]}
              markdownOptions={mdOpts}
            />
          );
        }
        return null;
      })}
    </>
  );
}
