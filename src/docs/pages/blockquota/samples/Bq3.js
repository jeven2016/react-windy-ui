import React from 'react';
import {Blockquota} from 'react-windy-ui';

export default function Bq3() {
  return <>
    <Blockquota hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>

    <Blockquota type="primary" hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>

    <Blockquota type="secondary" hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
  </>;
}