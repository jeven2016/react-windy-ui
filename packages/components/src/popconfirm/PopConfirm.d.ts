import { CommonProps, JustifyType, PositionType } from '../generic';
import React, { MouseEvent } from 'react';
import { ButtonProps } from '../button';
import { PopoverProps } from '../popover';

export type PopConfirmProps = {
  body?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  onOk?: (e: MouseEvent) => void;
  onCancel?: (e: MouseEvent) => void;
  icon?: React.ReactNode;
  justifyFooter?: JustifyType;
  position?: PositionType;
} & PopoverProps &
  CommonProps<HTMLDivElement>;

declare const PopConfirm: React.ForwardRefExoticComponent<PopConfirmProps>;
export default PopConfirm;
