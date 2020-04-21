import {isArray, isNil} from '../Utils';

const validateOneChild = (props) => {
  const {children} = props;
  if (isNil(children)) {
    throw new Error('No child found in this popover.');
  }

  if (isArray(children) && children.length > 1) {
    throw new Error('only one child can be added.');
  }
};

export {
  validateOneChild,
};