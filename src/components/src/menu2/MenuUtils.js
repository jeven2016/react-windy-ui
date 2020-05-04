export const MenuDirection = {
  horizontal: {key: 'horizontal', className: 'menu-row'},
  vertical: {key: 'vertical', className: 'menu-column'},

  isVertical: (direction) => {
    return direction === MenuDirection.vertical.key;
  },
};

export const SubMenuDirection = {
  bottom: {key: 'bottom', className: 'bottom'},
  right: {key: 'right', className: 'right'},
};

export const MenuType = {
  float: 'float',
  primary: 'primary',
  dark: 'dark',
};