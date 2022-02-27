import React, { MouseEvent } from 'react';
import { ElementProps } from '../generic';

export type ToggleProps = {
  type?: 'normal' | 'primary' | 'secondary';
  defaultActive?: boolean;
  active?: boolean;
  block?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  label?: string | { on?: React.ReactNode; off?: React.ReactNode; showInBar?: boolean };
  onChange?: (active: boolean, e: MouseEvent) => void;
  errorType?: string;
} & Omit<ElementProps, 'onChange' | 'type'>;

declare const Toggle: React.ForwardRefExoticComponent<ToggleProps>;
export default Toggle;
