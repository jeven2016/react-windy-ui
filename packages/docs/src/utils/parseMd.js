import React from 'react';

/**
 * just a note copied from W3School
 * exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索
 * 字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject
 * 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用
 * exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，
 * 并把 lastIndex 属性重置为 0。
 */
const headerReg = /---([\s\S]*)---/;
const paramReg = /(.*?): (.*)/g;
const codeReg = /`{3}(jsx|js)([\s\S]*)`{3}/g;

const isBlank = (value) => value == null || /^\s*$/.test(value);

/**
 * {
 *   sample1: {
 *     title:{
 *       title: xxx,
 *       zh_CN: xxx,
 *       en_US: xxx
 *     },
 *     content: {
 *       zh_CN: xxx,
 *       en_US: xxx
 *     }
 *     code: sourceCode,
 *     component: function(){}
 *   }
 * }
 */
export const parseHeader = (markdownContent) => {
  let titleHeader = markdownContent.match(headerReg);
  const result = {title: {}};

  if (titleHeader) {
    const params = titleHeader[1].trim();
    const headers = result.title;
    let regMt;

    // eslint-disable-next-line no-cond-assign
    while ((regMt = paramReg.exec(params)) !== null) {
      const name = regMt[1].trim();
      if (isBlank(name)) {
        return;
      }
      const value = regMt[2].replace(/(.*)/, '$1');
      headers[name] = value.replace(/^'|'$/g, '').trim();
    }

    /*  if (result.title?.type === 'text') {
        result.title = {
          order: result.title.order,
          type: 'text',
          editUrl: result.title.editUrl,
        };
      }*/
  }
  return result;
};

export const parseContent = (markdownContent, beginIndex = 0, result = {}) => {
  let prefixIndex = markdownContent.indexOf('+++', beginIndex);
  if (prefixIndex < 0) {
    return result;
  }

  let nextPrefixIndex = markdownContent.indexOf('+++', prefixIndex + 5);
  let text;
  let end = false;
  if (nextPrefixIndex > -1) {
    text = markdownContent.substring(prefixIndex, nextPrefixIndex);
  } else {
    text = markdownContent.substring(prefixIndex);
    end = true;
  }
  const regMt = /\+{3}([^\n\r]*)[\n\r]([\s\S]*)/g.exec(text);
  if (regMt) {
    const locale = regMt[1].trim();
    result[locale] = regMt[2].trim();
  }
  if (!end) {
    parseContent(markdownContent, nextPrefixIndex, result);
  }
};

export const parseCode = (markdownContent) => {
  let regMt;
  if ((regMt = codeReg.exec(markdownContent)) !== null) {
    return regMt[1].trim();
  }
  return null;
};

const getPureName = (filename) => {
  return filename.substring(filename.lastIndexOf('/') + 1);
};

export const loadMdFiles = (requireMd, requireSamples, requireCode) => {
  let config = {};
  let visibleSampleName;

  const sourceCode = {};

  //parse the raw code
  requireCode && requireCode.keys().forEach((filename) => {
    const content = requireCode(filename);
    let pureName = getPureName(filename);
    if (isBlank(pureName)) {
      return;
    }
    pureName = pureName.replace(/\.(jsx|js)/ig, '');
    sourceCode[pureName] = content.default;
  });

  //parse the markdown files
  requireMd && requireMd.keys().forEach((filename) => {
    const content = requireMd(filename).default;
    let pureName = getPureName(filename);
    if (isBlank(pureName)) {
      return;
    }
    pureName = pureName.replace(/\.md/g, '');
    const title = parseHeader(content);
    const body = {};

    parseContent(content, 0, body);

    //parse the code part
    let code = body?.SampleCode;
    let codeFileName;
    if (code) {
      if (/`{3}/.test(code)) {
        code = code.replace(/`{3}(jsx|js)?/ig, '');
      } else {
        const values = code.split(':');
        if (values && values.length >= 2) {
          codeFileName = values[1].trim();
          code = sourceCode[codeFileName];
        }
      }
      delete body.SampleCode;
    }

    //only display this sample, the others should be ignored.
    //this field is only internally used to debug some issues.
    if (title.title.onlyVisible === 'true') {
      visibleSampleName = pureName;
    }

    config[pureName] = {
      ...title,
      content: body,
      code: code,
      codeFileName,
    };
  });

  //fill the react components into config
  requireSamples && requireSamples.keys().forEach(jsFileName => {
    const Comp = requireSamples(jsFileName).default;
    let pureName = getPureName(jsFileName);
    if (isBlank(pureName)) {
      return;
    }
    pureName = pureName.replace(/\.js|\.jsx/g, '');

    let found = false;
    Object.keys(config).forEach(key => {
      if (found) {
        return;
      }
      if (key.toLowerCase() === pureName.toLowerCase() ||
        pureName === config[key].codeFileName) {
        config[key].component = <Comp/>;
        found = true;
      }
    });
  });

  //generate a component base on the code
  Object.keys(config).forEach(key => {
    const definition = config[key];
    if (definition.title?.type === 'sample') {
      if (!definition.component && definition.code) {
        definition.component = definition.code;
      }
    }
  });

  if (visibleSampleName) {
    return {onlyVisibleSample: config[visibleSampleName]};
  }

  return config;
};