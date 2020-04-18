import {isNil} from '../Utils';

const validateOneChild = (props) => {
  const {children} = props;
  if (isNil(children) || children.length === 0) {
    throw new Error('No child found in this popover.');
  }

  if (children.length > 1) {
    throw new Error('only one child can be added.');
  }
};

export {
  validateOneChild,
};