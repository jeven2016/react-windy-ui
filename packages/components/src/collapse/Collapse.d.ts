import { DivProps } from 'react-windy-ui/dist/generic';
import React from 'react';
import Item from './Item';
import CollapsePanel from './CollapsePanel';

export type CollapseProps = {
  defaultActive?: string | string[] | number | number[];
  onChange?: (value: number | string, isCollapsed: boolean, e: React.MouseEvent) => void;
  active?: string | string[] | number | number[];
  accordion?: boolean;
  hasBorder?: boolean;
  hasBox?: boolean;
  hasCollapseIcon?: boolean;
  collapseIcon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  hasRipple?: boolean;
  disabled?: boolean;
} & DivProps<HTMLDivElement>;

interface RootComponent extends React.ForwardRefExoticComponent<CollapseProps> {
  Item: typeof Item;
  Panel: typeof CollapsePanel;
}

declare const Collapse: RootComponent;
export default Collapse;
