import React, {useMemo, useState} from 'react';
import {Select} from 'react-windy-ui';

export default function Select5() {
  //the items count
  const count = 15;

  //generate the items for selection
  const items = useMemo(() => {
    return [...Array(count).keys()].map((key, index) =>
        <Select.Option key={key} value={key}>{`Option ${key}`}</Select.Option>,
    );
  }, [count]);

  const [itemList, setItemList] = useState(items);

  const search = (value) => {
    console.log('search ' + value);
    let list;
    //if the value is blank, show the original items
    if (value == null || /^\s*$/.test(value)) {
      list = items;
    } else {
      //filter a list of items whose text partially equals to the searched text
      list = items.filter(
          item => {
            return item.props.children.toLowerCase().
                includes(value.toLowerCase());

          });
    }
    setItemList(list);
  };

  return <>
    <Select popupStyle={{width: '10rem', height: '20rem', overflow: 'auto'}}
            activeBy="click"
            defaultValue={0}
            searchable={true}
            onSearch={search}
            onSelect={(val) => console.log(`You just selected ${val}`)}>
      {itemList}
    </Select>
  </>;

}