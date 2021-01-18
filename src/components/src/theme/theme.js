import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import usePrevious from "../common/UsePrevious";
import useEventCallback from "../common/useEventCallback";
import {nonNil} from "../Utils";
import {createLink} from "./ThemeUtils";


const Status = {
    idle: 'idle',
    loading: 'loading',
    completed: 'completed'
}

/**
 * https://github.com/JoseRFelix/react-css-theme-switcher/blob/master/src/index.tsx
 * mark:
 * preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源
 * prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源, 预加载页面资源
 * 告诉浏览器加载下一页面可能会用到的资源，注意，不是当前页面。
 * 因此该方法的加载优先级非常低，也就是说该方式的作用是加速下一个页面的加载速度
 *
 * @param props
 * @constructor
 */
const CssThemeProvider = (props) => {
    const {theme, fileMap = {}} = props;
    const [status, setStatus] = useState(Status.idle);

    const themeId = `theme-link-id`;
    const preTheme = usePrevious(theme);

    const ensureLink = useEventCallback((linkElem) => {

    });

    const change = useEventCallback((newTheme) => {
        if (theme === newTheme) {
            return;
        }

        if (!fileMap.hasOwnProperty(newTheme)) {
            console.warn(`The theme(${newTheme}) doesn't exist.`);
            return;
        }

        //remove the old link
        const oldLink = document.getElementById(themeId);
        nonNil(oldLink) && oldLink.remove();


        const linkElem = createLink({
            id: id,
            rel: 'stylesheet',
            type: 'text/css',
            href: themeMap[theme],
            onload: () => {
                setStatus(Status.loaded);
            },
        });
    });

    useEffect(() => {

    });


}

CssThemeProvider.propTypes = {
    theme: PropTypes.string,
    fileMap: PropTypes.object
}