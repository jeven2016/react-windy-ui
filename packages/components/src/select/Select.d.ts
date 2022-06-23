import { FormErrorType, Size } from '../generic';
import { MenuItemProps, MenuProps } from '../menu';
import React from 'react';
import { PopupProps } from '../popup';

export type SelectProps = {
  name?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  errorType?: FormErrorType;
  size?: Size;
  disabled?: boolean;
  searchable?: boolean;
  autoWidth?: boolean;
  multiSelect?: boolean;
  hasBorder?: boolean;
  hasBox?: boolean;
  activeBy?: 'hover' | 'click';
  block?: boolean;
  defaultValue?: any;
  value?: any;
  onSelect?: (value?: any, e?: MouseEvent) => void;
  onSearch?: (state?: boolean) => void;
  searchDelay?: number;
  noDataText?: React.ReactNode;
  searchInputWidth?: number;
  hasArrow?: boolean;
  arrowIcon?: React.ReactNode;
  activeArrowIcon?: React.ReactNode;
  defaultActive?: boolean;
  active?: boolean;
  onChange?: (state?: boolean, e?: MouseEvent) => void;
  onActiveChange?: (state?: boolean, e?: MouseEvent) => void;
  onRemove?: (state?: boolean, e?: MouseEvent) => void;
  popupExtraClassName?: string;
  menuProps?: MenuProps;
  removable?: boolean;
  loaderType?: string;
  loading?: boolean;
  compactMenu?: boolean;
} & Omit<PopupProps, 'onSelect' | 'onChange'>;

export type SelectOptionProps = {
  value?: any;
  text?: React.ReactNode;
  render?: () => React.ReactNode;
} & MenuItemProps;

declare const SelectOption: React.ForwardRefExoticComponent<SelectOptionProps>;

declare interface RootComponent extends React.ForwardRefExoticComponent<SelectProps> {
  Option: typeof SelectOption;
}

declare const Select: RootComponent;

export default Select;
