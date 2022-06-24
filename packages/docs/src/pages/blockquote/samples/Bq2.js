import React, { useState } from 'react';
import { Blockquote, Toggle } from 'react-windy-ui';

export default function Bq2() {
  const [hasBorder, setBorder] = useState(true);
  const [hasBackground, setBg] = useState(true);
  const [hasBorderRadius, setBr] = useState(true);

  return (
    <>
      <div className="doc doc-row">
        <Toggle active={hasBorder} onChange={(active) => setBorder(active)} label="Border" />
      </div>
      <div className="doc doc-row">
        <Toggle active={hasBackground} onChange={(active) => setBg(active)} label="Background" />
      </div>
      <div className="doc doc-row">
        <Toggle
          active={hasBorderRadius}
          onChange={(active) => setBr(active)}
          label="Border Radius"
        />
      </div>
      <Blockquote
        hasBorder={hasBorder}
        hasBackground={hasBackground}
        hasBorderRadius={hasBorderRadius}
      >
        The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
        extended quotation. Usually, this is rendered visually by indentation (see Notes for how to
        change it). A URL for the source of the quotation may be given using the cite attribute,
        while a text representation of the source can be given using the &lt;cite&gt; element.
      </Blockquote>

      <Blockquote
        type="primary"
        hasBorder={hasBorder}
        hasBackground={hasBackground}
        hasBorderRadius={hasBorderRadius}
      >
        The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
        extended quotation. Usually, this is rendered visually by indentation (see Notes for how to
        change it). A URL for the source of the quotation may be given using the cite attribute,
        while a text representation of the source can be given using the &lt;cite&gt; element.
      </Blockquote>

      <Blockquote
        type="secondary"
        hasBorder={hasBorder}
        hasBackground={hasBackground}
        hasBorderRadius={hasBorderRadius}
      >
        The HTML Element (or HTML Block Quotation Element) indicates that the enclosed text is an
        extended quotation. Usually, this is rendered visually by indentation (see Notes for how to
        change it). A URL for the source of the quotation may be given using the cite attribute,
        while a text representation of the source can be given using the &lt;cite&gt; element.
      </Blockquote>
    </>
  );
}
