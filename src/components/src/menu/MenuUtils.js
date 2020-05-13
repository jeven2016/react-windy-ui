import {isNil} from '../Utils';

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

  isBottom: (direction) => {
    return direction === SubMenuDirection.bottom.key;
  },
};

export const MenuClassName = {
  groupHeader: 'group-header',
  group: 'menu-group',
  header: 'menu-header',
  item: 'menu-item ',
  subMenu: 'base-menu',
};

export const MenuType = {
  block: 'block',
  primary: 'primary',
  dark: 'dark',
};

export const Action = {
  clickItem: 'clickItem',
  openMenu: 'openMenu',
  closeMenu: 'closeMenu',
  clickHeader: 'clickHeader',
};

export const MenuConst = {
  all: 'all',
};

export const indentMenu = (
    props,
    index = 1) => {
  const {popupSubMenu, rootDom, indentUnit, indentation} = props;

  if (rootDom && rootDom.hasChildNodes()) {
    let menuChildNodes = rootDom.childNodes;
    menuChildNodes.forEach(childNode => {
      if (hasClass(childNode, MenuClassName.item)) {
        if (index > 1) {
          childNode.style.paddingLeft = `${index * indentation}${indentUnit}`;
        }
        return;
      }

      if (hasClass(childNode, MenuClassName.header) ||
          hasClass(childNode, MenuClassName.groupHeader)) {
        const count = index - 1 > 0 ? index - 1 : 1;
        childNode.style.paddingLeft = `${count *
        indentation}${indentUnit}`;
        return;
      }

      if (hasClass(childNode, MenuClassName.subMenu)) {
        const next = popupSubMenu ? index : index + 1;
        indentMenu({...props, rootDom: childNode}, next);
        return;
      }

      //group
      if (hasClass(childNode, MenuClassName.group)) {
        const next = index + 1;
        indentMenu({...props, rootDom: childNode}, next);
        return;
      }

      //collapse-panel
      var menuList = getItemParent(childNode);
      if (menuList) {
        indentMenu({...props, rootDom: menuList.node}, index);
      }
    });
  }
};

export const cancelIndent = (props) => {
  const {rootDom} = props;

  if (rootDom) {
    rootDom.getElementsByClassName('menu-header').forEach(header => {
      const paddingLeft = header.style.paddingLeft;
      if (!isNil(paddingLeft)) {
        header.style.paddingLeft = '';
      }
    });
  }
};

const getItemParent = (node) => {
  if (node && node.hasChildNodes()) {
    const childNodes = node.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      if (hasClass(childNodes[i], MenuClassName.item)) {
        return {node, isGroup: false};
      }
      if (hasClass(childNodes[i], MenuClassName.group)) {
        return {node, isGroup: true};
      }
      return getItemParent(childNodes[i]);
    }

  }
  return null;

};

export const hasClass = (node, className) => !isNil(node.className) &&
    node.className.includes(className);
