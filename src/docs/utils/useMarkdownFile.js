import React from 'react';
import {useLazyImport} from 'react-windy-ui';

/**
 * Reading a particular text form a markdown file
 * @param importFunc
 * @param mapping  like: {title: 'TITLE'} => parse the text wrapped in '[TITLE_BEGIN_zh_CN]' and '[TITLE_END_zh_CN]'
 * @param language
 */
const useMarkdownFile = ({
                           importFunc,
                           keys /*key: prefixInFile*/,
                           language,
                         }) => {
  const [data] = useLazyImport(importFunc, true);

  const result = new Map();
  for (let key of keys) {
    if (!data) {
      result.set(key, null);
      continue;
    }

    const startKey = !language
        ? `[${key}_BEGIN]`
        : `[${key}_BEGIN_${language}]`;

    const endKey = !language
        ? `[${key}_END]`
        : `[${key}_END_${language}]`;

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