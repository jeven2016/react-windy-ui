import React from 'react';

export type TimePickerProps = {
  time?: string;
  defaultTime?: string;
  format?: string;
  placeholder?: string;
  onChange?: (stringDate: string, selectedDate: any, e: React.MouseEvent) => void;
  popupType?: 'popup' | 'modal';
  locale?: string;
  config?: object;
  inline?: boolean;
  icon?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps>;
export default TimePicker;
