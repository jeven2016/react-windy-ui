import clsx from 'clsx';

export const ColCount = 12;

export const InputBorderType = {
  ok: 'input-ok',
  warning: 'input-warning',
  error: 'input-error'
};

export const NavbarFixedTypes = ['top', 'bottom'];
export const FixedTypes = ['top', 'bottom'];

export const NavbarListAlign = {
  left: 'align-left',
  right: 'align-right',
  center: 'align-center'
};

export const MenuType = {
  float: 'float',
  primary: 'primary',
  dark: 'dark'
};

export const PopupCtrlType = {
  hover: 'hover',
  click: 'click',

  isHover: (value) => value === PopupCtrlType.hover,
  isClick: (value) => value === PopupCtrlType.click
};

export const DropdownTriggerType = {
  hover: 'hover',
  click: 'click'
};

export const DropdownType = {
  button: 'button',
  normal: 'normal',
  simple: 'simple'
};

export const DropdownClass = {
  button: 'button-dropdown',
  simple: 'simple dropdown',
  normal: 'dropdown'
};

export const DropdownPosition = {
  topLeft: 'top',
  topRight: 'top right',
  bottomLeft: '',
  bottomRight: 'right'
};

export const PositionClass = {
  top: 'top center',
  topLeft: 'top top-left',
  topRight: 'top top-right',
  bottom: 'bottom center',
  bottomLeft: 'bottom bottom-left',
  bottomRight: 'bottom bottom-right',
  left: 'left center',
  leftTop: 'left left-top',
  leftBottom: 'left left-bottom',
  right: 'right center',
  rightTop: 'right right-top',
  rightBottom: 'right right-bottom'
};

export const PopupPosition = {
  top: 'top',
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight',
  left: 'left',
  leftTop: 'leftTop',
  leftBottom: 'leftBottom',
  right: 'right',
  rightTop: 'rightTop',
  rightBottom: 'rightBottom'
};

export const JustifyContentType = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  around: 'justify-around',
  between: 'justify-between',
  evenly: 'justify-evenly'
};

export const AlignItemsType = {
  start: 'align-start',
  end: 'align-end',
  center: 'align-center',
  stretch: 'stretch'
};

export function adjustItems(
  justifyContent /* value: start, center,...*/,
  alignItems /*value: start, end,...*/
) {
  const jc = JustifyContentType[justifyContent];
  const al = AlignItemsType[alignItems];
  return clsx({
    'flex-adjust': jc || al,
    [jc]: jc,
    [al]: al
  });
}

export const Active = {
  na: 'na',
  active: 'active',
  disactive: 'disactive',

  isNa: (value) => Active.na === value,
  isActive: (value) => Active.active === value,
  convertBool: (boolValue) => (boolValue ? Active.active : Active.disactive)
};

export const Direction = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const FormDirection = {
  ...Direction,
  inline: 'inline'
};

//=================================
export const EventListener = {
  click: 'click',
  mouseEnter: 'mouseover',
  mouseLeave: 'mouseleave',
  mouseDown: 'mousedown',
  mouseUp: 'mouseup',
  focus: 'focus',
  blur: 'blur',
  resize: 'resize',
  keyDown: 'keydown',
  scroll: 'scroll',
  select: 'select',
  touchStart: 'touchstart',
  touchEnd: 'touchend',
  touchMove: 'touchmove'
};

export const ContainerId = {
  popup: 'wui-popup'
};

export const Colors = {
  comment: 'comment',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  ok: 'ok',
  warning: 'warning',
  danger: 'danger',
  error: 'error',
  cyan: 'cyan',
  black: 'black',
  blue: 'blue',
  brown: 'brown',
  dark: 'dark',
  green: 'green',
  gray: 'gray',
  'gray-darker': 'gray-darker',
  light: 'light',
  'light-gray': 'light-gray',
  orange: 'orange',
  pink: 'pink',
  purple: 'purple',
  red: 'red',
  yellow: 'yellow',
  teal: 'teal',
  violet: 'violet',
  white: 'white'
};
