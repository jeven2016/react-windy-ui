import React from 'react';
import { CommonProps } from '../generic';

export type ProgressType = {
  percentValue?: number;
  type?: string;
  content?: React.ReactNode;
};

export type ProgressProps = {
  active?: boolean;
  percentValue?: number;
  initPercentValue?: number;
  incrementStart?: number;
  incrementEnd?: number;

  type?: string;
  hasStripe?: boolean;
  hasAnimation?: boolean;
  top?: boolean;
  hasContent?: boolean;
  showLoading?: boolean;
  style?: React.CSSProperties;
  barStyle?: React.CSSProperties;
  loaderType?: string;
  loaderSize?: string;
  config?: ProgressType[];
} & CommonProps<HTMLDivElement>;

interface RootComponent extends React.ForwardRefExoticComponent<ProgressProps> {
  showTop: (props: ProgressProps) => void;
  closeTop: () => void;
}

declare const Progress: RootComponent;
export default Progress;
