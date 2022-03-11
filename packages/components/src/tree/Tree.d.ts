import React from 'react';
import { CommonProps } from '../generic';
import TreeItem from './TreeItem';

export type TreeProps = {
  showLoading?: boolean;
  loadJsonData?: () => object;
  loader?: React.ReactNode;
  jsonData?: object;
  autoCheckLeaves?: boolean;
  multiSelect?: boolean;
  onlySelectLeaf?: boolean;
  checkable?: boolean;
  defaultExpandedItems?: any | any[];
  expandedItems?: any | any[];
  defaultSelectedItems?: any | any[];
  selectedItems?: any | any[];
  defaultCheckedItems?: any | any[];
  checkedItems?: any | any[];
  highlightLine?: boolean;
  onSelect?: (selectedIds: ?(any | any[]), e: MouseEvent) => void;
  onCheck?: (checkedIds?: any[], e?: MouseEvent) => void;
  onExpand?: (expandedIds?: any[], e?: MouseEvent) => void;
} & Omit<CommonProps<HTMLDivElement>, 'onSelect' | 'onCheck'>;

interface RootComponent extends React.ForwardRefExoticComponent<TreeProps> {
  TreeItem: typeof TreeItem;
}

declare const Tree: RootComponent;

export default Tree;
