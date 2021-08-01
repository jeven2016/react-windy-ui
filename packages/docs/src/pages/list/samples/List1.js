import React, {useState} from "react";
import {Divider, List, Toggle} from "react-windy-ui";

export default function List1() {
  const [hasRipple, setRipple] = useState(false);
  return <>
    <div className="doc doc-row">
      <Toggle active={hasRipple} onChange={val => setRipple(val)}
              label='Ripple'/>
    </div>
    <div className="doc doc-row space">
      <List header="Header"
            footer="Footer">
        <List.Item hasRipple={hasRipple}>This is an item</List.Item>
        <Divider/>
        <List.Item hasRipple={hasRipple}>This is an item</List.Item>
        <Divider/>
        <List.Item hasRipple={hasRipple}>This is an item</List.Item>
        <Divider/>
      </List>

    </div>
  </>;
}