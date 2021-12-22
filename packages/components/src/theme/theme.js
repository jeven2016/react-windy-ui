import React, {useContext, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import useEventCallback from "../common/useEventCallback";
import {nonNil} from "../Utils";
import {ThemeContext} from "../common/Context";
import {validate} from "../Utils";


const Status = {
  idle: 'idle',
  loading: 'loading',
  completed: 'completed'
}

const createLink = (linkConfig) => {
  const link = document.createElement('link');
  for (const [key, value] of Object.entries(linkConfig)) {
    if (key === 'onload') {
      //function
      link.onload = linkConfig.onload;
      continue;
    }
    link[key] = value;
  }

  return link;
};



/**
 * refer to : https://github.com/JoseRFelix/react-css-theme-switcher/blob/master/src/index.tsx
 *
 * mark:
 * preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源
 * prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源, 预加载页面资源
 * 告诉浏览器加载下一页面可能会用到的资源，注意，不是当前页面。
 * 因此该方法的加载优先级非常低，也就是说该方式的作用是加速下一个页面的加载速度
 *
 * @param props
 * @constructor
 */
export const CssThemeProvider = (props) => {
  const {defaultTheme, themeMap = {}, injectId = 'inject-link-id', linkId = 'theme-link-id', ...rest} = props;
  const [status, setStatus] = useState(Status.idle);
  const [theme, setTheme] = useState();

  const insertTheme = useEventCallback((linkElem) => {
    const injectNode = document.getElementById(injectId)
    const parent = injectNode?.parentNode;
    if (parent) {
      return parent.insertBefore(
        linkElem,
        injectNode.nextSibling
      );
    }
    return document.head.appendChild(linkElem);
  });

  const change = useEventCallback((newTheme) => {
    if (theme === newTheme) {
      return;
    }

    validate(themeMap.hasOwnProperty(newTheme), `The theme(${newTheme}) doesn't exist.`)

    setStatus(Status.loading);

    //remove the old link
    const oldLink = document.getElementById(linkId);
    nonNil(oldLink) && oldLink.remove();

    const linkElem = createLink({
      id: linkId,
      rel: 'stylesheet',
      type: 'text/css',
      href: themeMap[newTheme],
      onload: () => {
        setStatus(Status.loaded);
      },
    });

    //insert the link
    insertTheme(linkElem);
    setTheme(newTheme);
  });

  React.useEffect(() => {
    nonNil(defaultTheme) && change(defaultTheme);
  }, [change, defaultTheme]);

  const ctx = useMemo(() => ({
    status,
    theme,
    change,
    themes: Object.keys(themeMap)
  }), [change, themeMap, status, theme]);

  return <ThemeContext.Provider value={ctx} {...rest}/>
}

export const useTheme = () => useContext(ThemeContext);

CssThemeProvider.context = ThemeContext;

CssThemeProvider.propTypes = {
  injectId: PropTypes.string,
  linkId: PropTypes.string,
  defaultTheme: PropTypes.string,
  themeMap: PropTypes.object
}