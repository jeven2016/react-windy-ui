import React, {useEffect} from 'react';
import {
  okaidia as sty,
  prism as sty2,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {jsx} from 'react-syntax-highlighter/dist/cjs/languages/prism';

const Hcode = React.forwardRef((props, ref) => {
  const {children, style, inline = false, ...otherProps} = props;

  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    // SyntaxHighlighter.registerLanguage('javascript', javascript);
    // SyntaxHighlighter.registerLanguage('sass', sass);
    // SyntaxHighlighter.registerLanguage('scss', scss);
  }, []);

  return <>
    <SyntaxHighlighter
        ref={ref}
        customStyle={{fontSize: '.8rem', ...style}}
        language="jsx"
        // showLineNumbers={true}
        startingLineNumber={0}
        style={inline ? sty2 : sty}
        wrapLines={true}
        {...otherProps}>
      {children}
    </SyntaxHighlighter>
  </>;
});
export default Hcode;