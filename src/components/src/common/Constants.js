export const InputBorderType = {
  ok: 'input-ok',
  warning: 'input-warning',
  error: 'input-error',
};

export const NavBarFixedTypes = ['top', 'bottom'];
export const FixedTypes = ['top', 'bottom'];

export const NavBarListAlign = {
  left: 'align-left',
  right: 'align-right',
  center: 'align-center',
};

export const MenuType = {
  float: 'float',
  primary: 'primary',
  dark: 'dark',
};

export const PopupCtrlType = {
  hover: 'hover',
  click: 'click',

  isHover: (value) => value === PopupCtrlType.hover,
  isClick: (value) => value === PopupCtrlType.click,
};

export const DropdownTriggerType = {
  hover: 'hover',
  click: 'click',
};

export const DropdownType = {
  button: 'button',
  normal: 'normal',
  simple: 'simple',
};

export const DropdownClass = {
  button: 'button-dropdown',
  simple: 'simple dropdown',
  normal: 'dropdown',
};

export const DropdownPosition = {
  topLeft: 'top',
  topRight: 'top right',
  bottomLeft: '',
  bottomRight: 'right',
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
  rightBottom: 'right right-bottom',
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
  rightBottom: 'rightBottom',
};

export const TooltipTransformOrigin = {
  top: 'center bottom',
  topLeft: 'left bottom',
  topRight: 'right bottom',
  bottom: 'center top',
  bottomLeft: 'left top',
  bottomRight: 'right top',
  left: 'right center',
  leftTop: 'right top',
  leftBottom: 'right bottom',
  right: 'left center',
  rightTop: 'left top',
  rightBottom: 'left bottom',
};

export const PopoverTriggerType = {
  hover: 'hover',
  click: 'click',
};

export const FlexAlign = {
  left: 'flex-align left',
  right: 'flex-align right',
  center: 'flex-align center',
};

export const JustifyContentType = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  around: 'justify-around',
  between: 'justify-between',
  evenly: 'justify-evenly',
};

export const AlignItemsType = {
  start: 'align-start',
  end: 'align-end',
  center: 'align-center',
};

export const FormItemType = {
  inline: 'form-item inline',
  block: 'form-item',
  grid: 'form-item row',
};

export const Active = {
  na: 'na',
  active: 'active',
  disactive: 'disactive',

  isNa: (value) => Active.na === value,
  isActive: (value) => Active.active === value,
  convertBool: (boolValue) => boolValue ? Active.active : Active.disactive,
};

export const Direction = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

//=================================
export const EventListener = {
  click: 'click',
  mouseEnter: 'mouseover',
  mouseLeave: 'mouseleave',
  focus: 'focus',
  blur: 'blur',
  resize: 'resize',
  keyDown: 'keydown',
  scroll: 'scroll',
  select: 'select',
};

export const ContainerId = {
  popup: 'wui-popup',
};