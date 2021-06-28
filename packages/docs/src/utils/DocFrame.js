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
  const {children, width = '100%', height = '200px', style, ...others} = props;

  return <Frame
      initialContent={`<!DOCTYPE html><html><head>${getStyles()}</head><body><div id="docRoot"></div></body></html>`}
      mountTarget='#docRoot'
      // style={{border: 'none', overflow: 'visible'}}
      scrolling="yes"
      frameBorder="0"
      style={{
        ...style,
        width: width,
      }} height={height} {...others}>
    {children}
  </Frame>;
};

export {FrameContextConsumer};
export default DocFrame;