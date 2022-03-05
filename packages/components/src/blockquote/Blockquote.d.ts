import { CommonProps, JustifyType } from '../generic';
import React from 'react';

export type BlockquoteHeaderProps = CommonProps<HTMLDivElement>;

export type BlockquoteFooterProps = {
  justify?: JustifyType;
} & CommonProps<HTMLDivElement>;

export type BlockquoteProps = {
  type?: 'normal' | 'primary' | 'secondary';
  hasBorder?: boolean;
  hasBox?: boolean;
  hasBackground?: boolean;
  hasBorderRadius?: boolean;
} & CommonProps<HTMLDivElement>;

declare const Header: React.ForwardRefExoticComponent<BlockquoteHeaderProps>;
declare const Footer: React.ForwardRefExoticComponent<BlockquoteFooterProps>;

interface RootComponent extends React.ForwardRefExoticComponent<BlockquoteProps> {
  Header: typeof Header;
  Footer: typeof Footer;
}

declare const Blockquote: RootComponent;
export default Blockquote;
