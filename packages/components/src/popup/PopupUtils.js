import Input from '../input';
import Dropdown from '../dropdown';
import Tooltip from '../tooltip';
import TextField from '../textfield';

/**
 * Construct a props object for passing ref for controller node
 * @param ctrlNode
 * @param ctrlRef
 */
export const getRefConfig = (ctrlNode, ctrlRef) => {
  if (
    (ctrlNode?.type === Input && Input.isIconInput(ctrlNode)) ||
    (ctrlNode?.type === TextField && ctrlNode.props.select)
  ) {
    return { rootRef: ctrlRef };
  }

  const popupComps = [Dropdown, Tooltip];
  if (popupComps.includes(ctrlNode?.type)) {
    return { ctrlRef: ctrlRef };
  }
  return { ref: ctrlRef };
};
