import { CommonProps } from '../generic';
import React from 'react';

export type LayoutProps = {
  collapse?: boolean;
  collapseAttribute?: {
    attr?: string;
    minValue?: string;
    maxValue?: string;
  };
} & CommonProps<HTMLElement>;

export type LayoutHeaderProps = {
  fixed?: boolean;
} & CommonProps<HTMLDivElement>;

export type LayoutSliderProps = {
  hasBox?: boolean;
  collapse?: boolean;
  autoHide?: boolean;
  width?: string;
  minWidth?: string;
} & CommonProps<HTMLDivElement>;

export type LayoutContentProps = CommonProps<HTMLDivElement>;
export type LayoutSplitProps = CommonProps<HTMLDivElement>;
export type LayoutFooterProps = CommonProps<HTMLDivElement>;

declare const LayoutHeader: React.ForwardRefExoticComponent<LayoutHeaderProps>;
declare const LayoutSlider: React.ForwardRefExoticComponent<LayoutSliderProps>;
declare const LayoutContent: React.ForwardRefExoticComponent<LayoutContentProps>;
declare const LayoutSplit: React.ForwardRefExoticComponent<LayoutSplitProps>;
declare const LayoutFooter: React.ForwardRefExoticComponent<LayoutFooterProps>;

declare interface RootComponent extends React.ForwardRefExoticComponent<LayoutProps> {
  Header: typeof LayoutHeader;
  Slider: typeof LayoutSlider;
  Content: typeof LayoutContent;
  Split: typeof LayoutSplit;
  Footer: typeof LayoutFooter;
}

declare const Layout: RootComponent;
export default Layout;
