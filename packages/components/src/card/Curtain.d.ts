import { CommonProps, TriggerType } from '../generic';
import React from 'react';

export type CurtainProps = {
  disabled?: boolean;
  triggerBy?: TriggerType;
  clickMaskToChange?: boolean;
  defaultClose?: boolean;
  close?: boolean;
  onChange?: (any, MouseEvent) => void;
  closeContent?: React.ReactNode;
  darkMask?: boolean;
} & CommonProps<HTMLDivElement>;

declare const Curtain: React.ForwardRefExoticComponent<CurtainProps>;
export default Curtain;
