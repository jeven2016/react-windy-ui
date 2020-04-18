import React, {useCallback, useRef} from 'react';
import Menu from '../menu';
import Title from './Title';
import {isNil} from '../Utils';
import Button from '../button';
import PopupController from '../common/PopupController';
import Element from '../common/Element';

const Dropdown = React.forwardRef((props, ref) => {
  const dpRef = ref ? ref : useRef(null);
  const {
    disabled = false,
    selectable = false,
    type,
    onSelect,
    ownerRef, //the owner of controller component that listens on a series of events(focus,blur,mouseEnter, mouseLeave, etc.)
    active,
    onDropdownAutoClose, //override the dropdown's auto close handler
    bodyClassName = 'dropdown-menu',
    ...otherProps
  } = props;

  const handleSelect = useCallback((itemInfo, e) => {
    if (!isNil(onSelect)) {
      onSelect(itemInfo, e);
    }
  }, [onSelect]);

  //close the popup if the popup body is clicked
  const handleAutoClose = (isPopupClicked, isCtrlClicked) => {
    if (!isNil(onDropdownAutoClose)) {
      return onDropdownAutoClose(isPopupClicked, isCtrlClicked);
    }

    //let PopupController to close the popup while menu item is clicked
    if (isPopupClicked) {
      return true; //auto close
    }
    if (isCtrlClicked) {
      return false; //don't close
    }
  };

  const getMenu = useCallback((child) => {
    if (disabled) {
      return null;
    }
    //add callback for menu items
    let menuContent = React.cloneElement(child, {
      onClickItem: handleSelect,
      selectable: selectable,
    });

    return menuContent;
  }, [disabled, handleSelect, selectable]);

  const updateChildren = useCallback((chd) => {
    const childObj = {bodyClassName: bodyClassName, ownerRef: ownerRef};
    React.Children.forEach(chd, (child) => {
      let childType = child.type;

      if (childType === Menu) {
        childObj.body = getMenu(child);
        return;
      }
      if (childType === Title
          || childType === Button) {
        childObj.ctrl = React.cloneElement(child, {
          disabled: disabled,
        });
        return;
      }
      if (childType === Element) {
        childObj.body = child;
        return;
      }
      debugger
      throw new Error(
          'the children of dropdown can only be Title, Button, Menu or Element.');
    });
    return childObj;
  }, [props.children, disabled]);

  return <PopupController
      active={active}
      ref={dpRef}
      onAutoClose={handleAutoClose}
      disabled={disabled}
      handleChildren={updateChildren}
      {...otherProps}/>;

});

Dropdown.Title = Title;
export default Dropdown;