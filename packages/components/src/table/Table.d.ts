import React from 'react';

export type FilterItemType = {
  text?: React.ReactNode;
  value: PropTypes.any;
};

export type CellType = {
  key?: any;
  head?: React.ReactNode;
  paramName?: string;
  autoEllipsis?: boolean;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  width?: number | string;
  filterable?: boolean;
  filterConfig?: {
    filterItems?: FilterItemType;
  };
};

export type loadDataFunc = () => object;

export type TableProps = {
  instanceRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
  type?: 'normal' | 'striped' | 'simple';
  hover?: boolean;
  hasBorder?: boolean;
  loadData?: object | object[] | loadDataFunc;
  cells?: CellType[];

  hasBox?: boolean;
  checkable?: boolean;
  checkType?: 'checkbox' | 'radio';
  canCheckAll?: boolean;
  onCheckChange?: (rowData?: object, checked?: boolean, e?: MouseEvent) => void;
  onCheckAll?: (checked?: boolean, e: MouseEvent) => void;
  defaultCheckedRows?: any | any[];
  checkedRows?: any | any[];
  highlightCheckedRow?: boolean;
  defaultSortComparator?: (a?: any, b?: any) => number;
  defaultSortOrder?: 'asc' | 'desc';
  onSort?: (cell?: object, e?: MouseEvent) => void;
  sortOrder?: {
    key?: any;
    order?: 'asc' | 'desc';
  };
  defaultOkText?: string;
  defaultResetText?: string;
  defaultFilterComparator?: (a?: any, b?: any) => number;
  scrollY?: boolean;
  bodyHeight?: number;
  scrollX?: boolean;
  bodyWidth?: number;
};

declare const Table: React.ForwardRefExoticComponent<TableProps>;

export default Table;
