import { PopupProps } from '../popup';

export type PopoverProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  hasArrow?: boolean;
} & PopupProps;

declare const Popover: React.ForwardRefExoticComponent<PopoverProps>;
export default Popover;
