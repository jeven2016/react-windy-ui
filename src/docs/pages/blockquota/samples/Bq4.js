import React from 'react';
import {Blockquota} from 'react-windy-ui';

export default function Bq4() {
  return <>
    <Blockquota hasBorder hasBackground hasBox>
      <Blockquota.Header>Blockquota Header</Blockquota.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquota.Footer align="end">-Blockquota Footer</Blockquota.Footer>
    </Blockquota>

    <Blockquota type="primary" hasBorder hasBackground hasBox>
      <Blockquota.Header>Blockquota Header</Blockquota.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquota.Footer align="end">-Blockquota Footer</Blockquota.Footer>
    </Blockquota>

    <Blockquota type="secondary" hasBorder hasBackground hasBox>
      <Blockquota.Header>Blockquota Header</Blockquota.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquota.Footer align="end">-Blockquota Footer</Blockquota.Footer>
    </Blockquota>
  </>;
}