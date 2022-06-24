import React from 'react';
import { Blockquote } from 'react-windy-ui';

export default function Bq5() {
  return (
    <>
      <Blockquote hasBackground hasBox>
        <Blockquote.Header>Blockquote Header</Blockquote.Header>
        <div>
          The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
          extended quotation. Usually, this is rendered visually by indentation (see Notes for how
          to change it). A URL for the source of the quotation may be given using the cite
          attribute, while a text representation of the source can be given using the &lt;cite&gt;
          element.
        </div>
        <Blockquote.Footer align="end">-Blockquote Footer</Blockquote.Footer>
      </Blockquote>

      <Blockquote
        type="primary"
        hasBackground
        hasBox
        extraClassName="text color-white bg-color-purple"
      >
        <Blockquote.Header extraClassName="bold text color-white">
          Blockquote Header
        </Blockquote.Header>
        <div>
          The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
          extended quotation. Usually, this is rendered visually by indentation (see Notes for how
          to change it). A URL for the source of the quotation may be given using the cite
          attribute, while a text representation of the source can be given using the &lt;cite&gt;
          element.
        </div>
        <Blockquote.Footer align="end" extraClassName="bold text color-white">
          -Blockquote Footer
        </Blockquote.Footer>
      </Blockquote>

      <Blockquote
        type="secondary"
        hasBackground
        hasBox
        extraClassName="text color-white bg-color-black"
      >
        <Blockquote.Header extraClassName="bold text color-white">
          Blockquote Header
        </Blockquote.Header>
        <div>
          The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
          extended quotation. Usually, this is rendered visually by indentation (see Notes for how
          to change it). A URL for the source of the quotation may be given using the cite
          attribute, while a text representation of the source can be given using the &lt;cite&gt;
          element.
        </div>
        <Blockquote.Footer align="end" extraClassName="bold text color-white">
          -Blockquote Footer
        </Blockquote.Footer>
      </Blockquote>
    </>
  );
}
