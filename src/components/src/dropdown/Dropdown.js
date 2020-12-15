import React, {useCallback, useRef} from 'react';
import Popup from '../popup/Popup';
import Menu from '../menu';
import {convertToArray} from '../Utils';
import * as PropTypes from 'prop-types';

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
    popupInstanceRef,
    ...otherProps
  } = props;

  const ctrlRef = useRef();

  const selectHandler = useCallback((selectedIds, e) => {
    const array = convertToArray(selectedIds);
    let selectedId;
    if (array.length > 0) {
      selectedId = array[0];
    }
    onSelect && onSelect(selectedId, e);
  }, [onSelect]);

  const chd = React.Children.map(children, elem => {
    if (elem.type === DropdownMenu) {
      return React.cloneElement(elem,
          {selectable: false, onClickItem: selectHandler});
    }
    return elem;
  });

  return <Popup
      ref={popupInstanceRef}
      extraClassName={extraClassName}
      className={className}
      ctrlRef={(domNode) => ctrlRef.current = domNode}
      ctrlNode={title}
      body={<div ref={ref}>{chd}</div>}
      {...otherProps}
  />;
});

Dropdown.Menu = DropdownMenu;
Dropdown.Item = Menu.Item;
Dropdown.SubMenu = Menu.SubMenu;

Dropdown.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.node,
  onSelect: PropTypes.func,
  popupInstanceRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.elementType}),
  ]),
};

export default Dropdown;