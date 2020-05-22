import React, {useCallback, useRef} from 'react';
import Popup from '../popup/Popup';
import Menu from '../menu';
import {convertToArray} from '../Utils';

const DropdownMenu = React.forwardRef((props, ref) => {
  return <Menu {...props} ref={ref}/>;
});

const Dropdown = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'dropdown-menu popup',
    title,
    children,
    onSelect,
    ...otherProps
  } = props;

  const ctrlRef = useRef();

  const selectHandler = useCallback((selectedIds) => {
    const array = convertToArray(selectedIds);
    let selectedId;
    if (array.length > 0) {
      selectedId = array[0];
    }
    onSelect && onSelect(selectedId);
  }, [onSelect]);

  const chd = React.Children.map(children, elem => {
    if (elem.type === DropdownMenu) {
      return React.cloneElement(elem,
          {selectable: false, onClickItem: selectHandler});
    }
    return elem;
  });

  return <Popup
      ref={ref}
      extraClassName={extraClassName}
      className={className}
      ctrlRef={(domNode) => ctrlRef.current = domNode}
      ctrlNode={title}
      body={chd}
      {...otherProps}
  />;
});

Dropdown.Menu = DropdownMenu;
Dropdown.Item = Menu.Item;
Dropdown.SubMenu = Menu.SubMenu;

export default Dropdown;