import React, {useMemo} from 'react';
import {isBlank, nonNil, validate} from "../Utils";
import {ThemeContext} from "../common/Context";

// const ThemeMap = {
//   dark: React.lazy(() => import('../wui-dark.css')),
//   default: React.lazy(() => import('../wui.css')),
// }


const ThemeProvider = (props) => {
  const {theme = 'default', themeMap, children, fallback = <></>} = props;
  validate(!isBlank(theme) && nonNil(themeMap[theme]), `The theme(${theme}) doesn't exist.`)

  const value = useMemo(() => ({
    theme,
    themeList: Object.keys(themeMap),
  }), [theme, themeMap]);

  const ThemeStyles = themeMap[theme];

  return <>
    <React.Suspense fallback={fallback}>
      <ThemeStyles/>
    </React.Suspense>
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  </>
}

export default ThemeProvider;