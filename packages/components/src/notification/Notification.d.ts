import { PositionType } from '../generic';
import { AlertProps } from '../alert';

export type NotificationCfg = {
  position?: PositionType;
  duration?: number;
  hasCloseIcon?: boolean;
  onClose?: () => void;
  rect?: {
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    top?: number | string;
  };
  alertProps?: AlertProps;
} & AlertProps;

export interface NotificationProps {
  getConfig(): NotificationCfg;

  config(cfg?: NotificationCfg): void;

  info(cfg?: NotificationCfg): void;

  ok(cfg?: NotificationCfg): void;

  warning(cfg?: NotificationCfg): void;

  error(cfg?: NotificationCfg): void;

  simple(cfg?: NotificationCfg): void;

  mini(cfg?: NotificationCfg): void;
}

declare const Notification = NotificationProps;
export default Notification;
