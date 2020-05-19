import React, {useRef} from 'react';
import Popup from '../popup/Popup';
import Menu from '../menu';
import {isString} from '../Utils';

/*
 <Dropdown title="<Button/> | String" position="leftTop" triggerBy="hover">
            <Button color="red" outline={true}>LT</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>


 */
const menu = <Menu hasBox={false}>
  <Menu.Item id="item1">Menu Item1</Menu.Item>
  <Menu.Item id="item2">Menu Item2</Menu.Item>
  <Menu.Item id="item3">Menu Item3</Menu.Item>
  <Menu.Item id="item4">Menu Item4</Menu.Item>
</Menu>;

// const menu = <div style={{width: "300px", height: "200px"}}>
//   <span>Item1</span>
//   <span>Item1</span>
//   <span>Item1</span>
//   <span>Item1</span>
//   <span>Item1</span>
// </div>

// const menu= <div style={{width: '300px', height: '200px'}}>div</div>

const Dropdown = React.forwardRef((props, ref) => {
  const {
    title,
    ...otherProps
  } = props;

  const ctrlRef = useRef();

  return <Popup
      ctrlRef={(domNode) => ctrlRef.current = domNode}
      ctrlNode={title}
      body={menu}
      {...otherProps}
  />;
});

export default Dropdown;