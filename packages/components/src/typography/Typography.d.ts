import { ElementProps } from '../generic';
import React from 'react';

export type TypographyProps = {
  color?: string;
  disabled?: boolean;
  mark?: boolean;
  code?: boolean;
  keyboard?: boolean;
  underline?: boolean;
  deleted?: boolean;
  strong?: boolean;
  italic?: boolean;
  nativeType?: string;
  bold?: boolean;
  autoEllipsis?: boolean;
  hasTooltip?: boolean;
} & ElementProps;

declare const Typography: React.ForwardRefExoticComponent<TypographyProps>;
export default Typography;
