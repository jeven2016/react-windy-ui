export const Action = {
  clickItem: 'clickItem'
};

export const dispatch = ({ type, ...params }) => {
  switch (type) {
    case Action.clickItem:
      // clickItemHandler(params);
      break;

    default:
      break;
  }
};
