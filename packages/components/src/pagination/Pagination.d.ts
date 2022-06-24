import React from 'react';
import { CommonProps, JustifyType } from '../generic';
import { ButtonProps } from '../button';

export type PaginationProps = {
  siblingCount?: number;
  pageCount?: number;
  page?: number;
  defaultPage?: number;
  hasPrevButton?: boolean;
  hasNextButton?: boolean;
  hasPageRange?: boolean;
  pageRanges?: number[];
  renderPageRanges?: (value?: number) => void;
  defaultPageRange?: number;
  pageRange?: number;
  onChange?: (nextPage: number, limit: number, e: MouseEvent) => void;
  onChangeRange?: (pageRange: number, e: MouseEvent) => void; //todo: change it to pageSize
  hasGo?: boolean;
  buttonProps?: ButtonProps;
  leftItems?: React.ReactNode[];
  rightItems?: React.ReactNode[];
  simple?: boolean;
  compactMenu?: boolean;
  renderPre?: () => React.ReactNode;
  renderNext?: () => React.ReactNode;
  selectProps?: object; //todo select props;
  justify?: JustifyType;
} & Omit<CommonProps<HTMLDivElement>, 'onChange'>;

declare const Pagination: React.ForwardRefExoticComponent<PaginationProps>;

export default Pagination;
