import React from 'react';
import { CommonProps } from '../generic';

export type TabsItemsProps = { children?: React.ReactNode };
export type TabsPanelsProps = { children?: React.ReactNode };
export type TabItemProps = {
  disabled?: boolean;
  value?: any;
  removable?: boolean;
  hasRipple?: boolean;
} & CommonProps<HTMLDivElement>;

export type TabPanelProps = {
  itemValue?: any;
} & CommonProps<HTMLDivElement>;

declare const Items: React.FC<TabsItemsProps>;
declare const Panels: React.FC<TabsPanelsProps>;
declare const TabItem: React.ForwardRefExoticComponent<TabItemProps>;
declare const TabPanel: React.ForwardRefExoticComponent<TabPanelProps>;
declare const ItemContent: React.ForwardRefExoticComponent<CommonProps<HTMLDivElement>>;

export type TabsProps = {
  hasRipple?: boolean;
  rippleColor?: string;
  defaultActive?: any;
  active?: any;
  onChange?: (value?: any) => void;
  onRemove?: (value?: any) => void;
  removable?: boolean;
  equalWidth?: boolean;
  position?: string;
  hasBorder?: boolean;
  cardBorder?: string;
  type?: string;
  scrollable?: boolean;
} & Omit<CommonProps<HTMLDivElement>, 'onChange'>;

export interface RootComponent extends React.ForwardRefExoticComponent<TabsProps> {
  Items: typeof Items;
  Panels: typeof Panels;
  TabItem: typeof TabItem;
  TabPanel: typeof TabPanel;
  ItemContent: typeof ItemContent;
}

declare const Tabs: RootComponent;
export default Tabs;
