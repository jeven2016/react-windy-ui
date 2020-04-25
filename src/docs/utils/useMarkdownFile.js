import React from 'react';
import useLazyImport from '../../components/src/common/UseLazyImport';
import markdown from './Markdown';

/**
 * Reading a particular text form a markdown file
 * @param importFunc
 * @param mapping  like: {title: 'TITLE'} => parse the text wrapped in '[TITLE_BEGIN_zh_CN]' and '[TITLE_END_zh_CN]'
 * @param language
 */
const useMarkdownFile = ({importFunc, mapping = {/*key: prefixInFile*/}, language}) => {
  const [data] = useLazyImport(importFunc, true);

  const result = new Map();
  for (let [key, value] of Object.entries(mapping)) {
    if (!data || !value) {
      result.set(key, null);
      continue;
    }

    const startKey = !language
        ? `[${value}_BEGIN]`
        : `[${value}_BEGIN_${language}]`;

    const endKey = !language
        ? `[${value}_END]`
        : `[${value}_END_${language}]`;

    const startKeyIndex = data.indexOf(startKey);
    const endKeyIndex = data.indexOf(endKey);

    if (endKeyIndex < startKeyIndex) {
      throw new Error(`${endKey} should be defined ahead of ${startKey} `);
    }

    if (startKeyIndex < 0 || endKeyIndex <= 0) {
      result.set(key, null);
      continue;
    }
    const text = data.substring(startKeyIndex + startKey.length, endKeyIndex);
    result.set(key, text);

  }
  return result;
};

export default useMarkdownFile;