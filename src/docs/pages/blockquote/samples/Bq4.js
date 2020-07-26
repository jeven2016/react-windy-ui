import React from 'react';
import {Blockquote} from 'react-windy-ui';

export default function Bq4() {
  return <>
    <Blockquote hasBorder hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer justify="start">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>

    <Blockquote type="primary" hasBorder hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer justify="center">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>

    <Blockquote type="secondary" hasBorder hasBackground hasBox>
      <Blockquote.Header>Blockquote Header</Blockquote.Header>
      <div>
        The HTML Element (or HTML Block Quotation Element)
        indicates that the enclosed text is an extended quotation.
        Usually, this is rendered visually by indentation
        (see Notes for how to change it). A URL for the source of
        the quotation may be given using the cite attribute,
        while a text representation of the source can be given using
        the &lt;cite&gt; element.
      </div>
      <Blockquote.Footer justify="end">-Blockquote Footer</Blockquote.Footer>
    </Blockquote>
  </>;
}