import {isNil} from '../Utils';
import {invoke} from '../Utils';

const multipleClickAction = (state, action) => {
  const isItemClicked = !isNil(
      (action.isSelectedByValue)(action.data.clickItem.value));
  let selectedItems = null;
  if (isItemClicked) {
    //remove the item
    selectedItems = state.selectedItems.filter(
        item => item.value !== action.data.clickItem.value);
  } else {
    selectedItems = [...state.selectedItems, action.data.clickItem];
  }

  invoke(action.data.callback, selectedItems);
  return {
    ...state,
    searchedValue: null,
    selectedItems: selectedItems,
    showFilteredItems: false,
  };
};

export {
  multipleClickAction,
};