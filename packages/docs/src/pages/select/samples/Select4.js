import React, {useMemo, useState} from 'react';
import {Select} from 'react-windy-ui';

export default function Select4() {
  //the item count
  const count = 15;

  //generate the items for selection
  const items = useMemo(() => {
    return [...Array(count).keys()].map((key, index) =>
      <Select.Option key={key} value={key}>{`Option ${key}`}</Select.Option>,
    );
  }, [count]);

  const [itemList, setItemList] = useState(items);
  const [loading, setLoading] = useState(false);

  //customized search function
  const search = (value) => {
    console.log('search ' + value);

    //if it is blank, show the original items
    if (value == null || /^\s*$/.test(value)) {
      setItemList(items);
      return;
    }

    //show a loading indicator
    setLoading(true);

    setTimeout(() => {
      //filter a list of items
      let list = items.filter(
        item => {
          return item.props.children.toLowerCase().includes(value.toLowerCase());
        });
      setItemList(list);
      setLoading(false);
    }, 1000);
  };

  return <>
    <div className="doc doc-row space">
      <Select popupBodyStyle={{height: '20rem', overflow: 'auto'}}
              activeBy="hover"
              defaultValue={0}
              searchable
              loading={loading}
              onSearch={search}
              onSelect={(val) => console.log(`You just selected ${val}`)}>
        {itemList}
      </Select>
    </div>
  </>;

}