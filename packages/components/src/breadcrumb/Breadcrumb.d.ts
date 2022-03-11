import { CommonProps } from '../generic';
import React from 'react';

export type separatorFun = (index?: number, itemProps?: object) => React.ReactNode;

export type BreadcrumbItemProps = {
  active?: boolean;
  value?: any;
} & CommonProps<HTMLSpanElement>;

declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps>;

export type BreadcrumbProps = {
  hasBackground?: boolean;
  separator?: React.ReactNode | separatorFun;
} & CommonProps<HTMLDivElement>;

interface RootComponent extends React.ForwardRefExoticComponent<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
}

declare const Breadcrumb = RootComponent;
export default Breadcrumb;
