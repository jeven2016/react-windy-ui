import React from 'react';
import { CommonProps } from '../generic';

export type BadgeProps = {
  type?: 'normal' | 'dot' | 'tag';
  body?: React.ReactNode;
  color?: string;
  active?: boolean;
  shake?: boolean;
  shakeDuration?: number;
  contentStyle?: React.CSSProperties;
} & CommonProps<HTMLDivElement>;

declare const Badge: React.ForwardRefExoticComponent<BadgeProps>;
export default Badge;
