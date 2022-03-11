import React, { MouseEvent } from 'react';
import { CommonProps, JustifyType, ModalType } from '../generic';
import { ButtonProps } from '../button';

export type ModalProps = {
  size?: 'xLarge' | 'large' | 'medium' | 'small';
  type?: ModalType;
  hasMask?: boolean;
  onCancel?: (e: MouseEvent) => void;
  active?: boolean;
  style?: React.CSSProperties;
  center?: boolean;
  autoOverflow?: boolean;
  hasDefaultWidth?: boolean;
} & Omit<CommonProps<HTMLDivElement>, 'type' | 'size'>;

export type ModalConfigProps = {
  hasIcon?: boolean;
  compact?: boolean;
  header?: React.ReactNode;
  title?: React.ReactNode;
  body?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onOk?: (e: MouseEvent) => void;
  onCancel?: (e: MouseEvent) => void;
  icon?: React.ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
} & ModalProps;

export interface BodyProps extends CommonProps<HTMLDivElement> {}

export interface HeaderProps extends CommonProps<HTMLDivElement> {}

export interface FooterProps extends CommonProps<HTMLDivElement> {
  justify?: JustifyType;
  compact?: boolean;
}

export interface ModalMethods {
  ref: React.Ref<any>;

  //TODO: should more attributes be supported for Modal
  update: (config: {
    header?: React.ReactNode;
    title?: React.ReactNode;
    body?: React.ReactNode;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
  }) => void;

  close: () => void;
}

declare const Body: React.ForwardRefExoticComponent<BodyProps>;
declare const Header: React.ForwardRefExoticComponent<HeaderProps>;
declare const Footer: React.ForwardRefExoticComponent<FooterProps>;

interface RootComponent extends React.ForwardRefExoticComponent<ModalProps> {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  info: (config: ModalConfigProps) => void;
  warning: (config: ModalConfigProps) => void;
  error: (config: ModalConfigProps) => void;
  success: (config: ModalConfigProps) => void;
  confirm: (config: ModalConfigProps) => void;
  closeAll: (delay?: number) => void;
  compact: (config: ModalConfigProps) => void;
}

declare const Modal: RootComponent;
export default Modal;
