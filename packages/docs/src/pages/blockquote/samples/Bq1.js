import React from 'react';
import { Blockquote } from 'react-windy-ui';

export default function Bq1() {
  return (
    <>
      <Blockquote>
        The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
        extended quotation. Usually, this is rendered visually by indentation (see Notes for how to
        change it). A URL for the source of the quotation may be given using the cite attribute,
        while a text representation of the source can be given using the &lt;cite&gt; element.
      </Blockquote>

      <Blockquote type="primary">
        The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
        extended quotation. Usually, this is rendered visually by indentation (see Notes for how to
        change it). A URL for the source of the quotation may be given using the cite attribute,
        while a text representation of the source can be given using the &lt;cite&gt; element.
      </Blockquote>

      <Blockquote type="secondary">
        The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
        extended quotation. Usually, this is rendered visually by indentation (see Notes for how to
        change it). A URL for the source of the quotation may be given using the cite attribute,
        while a text representation of the source can be given using the &lt;cite&gt; element.
      </Blockquote>
    </>
  );
}
