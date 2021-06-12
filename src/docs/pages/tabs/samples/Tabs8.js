import React from 'react';
import {Tabs} from 'react-windy-ui';
import {faHeart, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/*

The class defined in your scss file:
---------------------------------------

.extra-tab {
  border-radius: .5rem .5rem 0 0;
  color: rgba(255, 255, 255, .6);
  background: rgb(10, 137, 219);
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);

  .tab-item {
    &:hover {
      color: #fff !important;
    }

    &.active {
      color: #fff !important;
      background: rgba(12, 160, 255, 5);
    }
  }

  .tab-bar {
    border-bottom: 4px solid rgb(255, 0, 0) !important;
  }
}

 */

const IconStyle = {
  marginBottom: '.5rem',
  fontSize: '1.5rem'
}

export default function Tabs8() {

  return <>
    <Tabs equalWidth={true} extraClassName="extra-tab">
      <Tabs.Items>
        <Tabs.TabItem value="Item1">
          <Tabs.ItemContent>
            <FontAwesomeIcon icon={faHome} style={IconStyle}/>
            Home
          </Tabs.ItemContent>
        </Tabs.TabItem>
        <Tabs.TabItem value="Item2">
          <Tabs.ItemContent>
            <FontAwesomeIcon icon={faPhone} style={IconStyle}/>
            PHONE
          </Tabs.ItemContent>
        </Tabs.TabItem>
        <Tabs.TabItem value="Item3">
          <Tabs.ItemContent>
            <FontAwesomeIcon icon={faHeart} style={IconStyle}/>
            GIFT
          </Tabs.ItemContent>
        </Tabs.TabItem>
      </Tabs.Items>
    </Tabs>
  </>;
}