import React, {useMemo, useState} from 'react';
import {Select} from 'react-windy-ui';

export default function Select4() {
  //the items count
  const count = 15;

  //generate the items for selection
  const items = useMemo(() => {
    return [...Array(count).keys()].map((key, index) =>
        <Select.Option key={key} value={key}>{`Option ${key}`}</Select.Option>,
    );
  }, [count]);

  const [itemList, setItemList] = useState(items);
  const [showLoader, setShowLoader] = useState(false);

  //customized search function
  const search = (value) => {
    console.log('search ' + value);

    //if the value is blank, show the original items
    if (value == null || /^\s*$/.test(value)) {
      setItemList(items);
      return;
    }

    //let Select to show a loading indicator
    setShowLoader(true);

    setTimeout(() => {
      //filter a list of items and ecch item's text should contain the searched value
      let list = items.filter(
          item => {
            return item.props.children.toLowerCase().
                includes(value.toLowerCase());

          });
      setItemList(list);
      setShowLoader(false);
    }, 1000);

  };

  return <>
    <Select popupBodyStyle={{height: '20rem', overflow: 'auto'}}
            activeBy="hover"
            defaultValue={0}
            searchable
            showLoader={showLoader}
            onSearch={search}
            onSelect={(val) => console.log(`You just selected ${val}`)}>
      {itemList}
    </Select>
  </>;

}