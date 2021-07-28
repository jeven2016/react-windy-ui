import Frame, {FrameContextConsumer} from 'react-frame-component';
import React from 'react';

const getStyles = () => {
  let head = '';
  document.querySelectorAll('link[rel=stylesheet]').forEach(link => {
    head += link.outerHTML;
  });

  document.querySelectorAll('head style').forEach(style => {
    head += style.outerHTML;
  });

  return head;
};

const DocFrame = (props) => {
  const {children, hasBox = false, width = '100%', height = '200px', style, ...others} = props;

  const boxStyle = hasBox ? {boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.18), 0px 8px 10px 1px rgba(0, 0, 0, 0.12), 0px 3px 12px 2px rgba(0, 0, 0, 0.12)'} : {};

  return <Frame
    initialContent={`<!DOCTYPE html><html><head>${getStyles()}</head><body><div id="docRoot"></div></body></html>`}
    mountTarget='#docRoot'
    // style={{border: 'none', overflow: 'visible'}}
    scrolling="yes"
    frameBorder="0"
    style={{
      ...boxStyle,
      ...style,
      width: width,
    }} height={height} {...others}>
    {children}
  </Frame>;
};

export {FrameContextConsumer};
export default DocFrame;