import {isNil} from "../Utils";
import {MenuClassName, MenuType} from "../common/Constants";
import React from "react";
import Header from "./Header";

export const hasClass = (node, className) => !isNil(node.className) &&
    node.className.includes(className);

export const updateItem = (props, itemNodes, next, index) => {
  const {paddingLeftIncrement, paddingLeftUnit} = props;
  for (let elem in itemNodes) {
    let item = itemNodes[elem];
    if (hasClass(item, MenuClassName.submenu)) {
      setPadding(props, item, ++index);
    }
    if (hasClass(item, MenuClassName.item)
        || hasClass(item, MenuClassName.header)) {
      item.style.paddingLeft = `${next
      * paddingLeftIncrement}${paddingLeftUnit}`;
    }
  }
};

export const setPadding = (props, menu, index = 0) => {
  if (!props.setItemPaddingLeft) {
    return;
  }
  if (menu.hasChildNodes()) {
    let menuChildNodes = menu.childNodes;
    for (let elem in menuChildNodes) {
      let childNode = menuChildNodes[elem];
      if (hasClass(childNode, MenuClassName.list)) {
        updateItem(props, childNode.childNodes, index + 1, index);
      }
      if (hasClass(childNode, MenuClassName.header)) {
        updateItem(props, [childNode], index === 0 ? 1 : index, index);
      }
      if (hasClass(childNode, MenuClassName.submenu)) {
        setPadding(props, childNode, index + 1);
      }
    }
  }
};

/**
 * Menu Context
 * @type {React.Context<{}>}
 */
export const MenuContext = React.createContext({});
export const SubMenuContext = React.createContext({});

// https://github.com/facebook/react/issues/13969
// context should be placed in a individual file
export const FloatMenuContext = React.createContext({});

export const isFloatMenu = (type) => {
  return type === MenuType.float;
};

export const passHeaderHandler = (children, handler) => {
  return React.Children.map(children, (child) => {
    if (child.type === Header) {
      return React.cloneElement(child, {
        onClick: handler
      });
    }
    return child;
  })
};