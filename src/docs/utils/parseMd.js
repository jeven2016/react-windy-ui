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
 *     body: {
 *       zh_CN: xxx,
 *       en_US: xxx
 *     }
 *     code: xxxx,
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
  }
  return result;
};

export const parseContent = (markdownContent) => {
 /* let regMt;
  let cnt = {};
  while ((regMt = contentReg.exec(markdownContent)) !== null) {
    const locale = regMt[1].trim();
    if (isBlank(locale)) {
      return;
    }
    cnt[locale] = regMt[2].trim();
  }
  return cnt;*/
};

export const parseCode = (markdownContent) => {
  let regMt;
  if ((regMt = codeReg.exec(markdownContent)) !== null) {
    return regMt[1].trim();
  }
  return null;
};

export const loadMdFiles = (requireMd) => {
  const config = {};
  requireMd.keys().forEach((filename) => {
    const content = requireMd(filename).default;
    let pureName = filename.substring(filename.lastIndexOf('/') + 1);
    if (isBlank(pureName)) {
      return;
    }
    pureName = pureName.replace(/\.md/g, '');
    let existingElem;
    if (config.hasOwnProperty(pureName)) {
      existingElem = config[pureName];
    } else {
      existingElem = config[pureName] = {};
    }
    if (pureName.includes('basic_button')) {
      const title = parseHeader(content);
      const body = parseContent(content);
      const code = parseCode(body);

      console.log(title);
      console.log(body);
      console.log(code);
    }
  });

  return config;
};