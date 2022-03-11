import React from 'react';

export type DateFormatType = {
  /** year, format: 'YYYY' **/
  year: string;

  /** year and month, format: 'YYYY-MM' **/
  month: string;

  /** date, format: 'YYYY-MM-DD' **/
  date: string;

  /** date time, format: 'YYYY-MM-DD HH:mm:ss' **/
  dateTime: string;

  /** time, format: 'HH:mm:ss' **/
  time: string | 'HH:mm:ss';
};

export type DatePickerProps = {
  hasTitle?: boolean;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  onChange?: (stringDate: string, selectedDate: any, e: React.MouseEvent) => void;

  /**
   config object:
   {
          columnCount: 7 * 5,
          format: {
            year: 'YYYY',
            month: 'YYYY-MM',
            date: 'YYYY-MM-DD',
            dateTime: 'YYYY-MM-DD HH:mm:ss',
            time: 'HH:mm:ss'
          },
          locale_en_US: {
            now: 'Now',
            today: 'Today',
            ok: 'OK',
            days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            dayOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            monthDetails: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ]
          },
          locale_zh_CN: {
            now: '此时',
            today: '今天',
            ok: '确定',
            days: ['一', '二', '三', '四', '五', '六', '日'],
            dayOfWeek: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            monthDetails: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ]
          }
      }
   **/
  config?: object;
  popupType?: 'popup' | 'modal';
  type?: 'year' | 'yearRange' | 'month' | 'date' | 'dateTime';
  minYear?: string | number;
  format?: DateFormatType;
  disabled?: boolean;
  hasFooter?: boolean;

  /** locale, format :  'zh_CN' ,'en_US' **/
  locale?: string;
  inline?: boolean;
} & Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps>;
export default DatePicker;
