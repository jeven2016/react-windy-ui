import Input from '../Input';
import Dropdown from '../dropdown';
import Tooltip from '../Tooltip';
import Select from '../select';

/**
 * Construct a props object for passing ref for controller node
 * @param ctrlNode
 * @param ctrlRef
 */
export const getRefConfig = (ctrlNode, ctrlRef) => {
  if (ctrlNode.type === Input && Input.isIconInput(ctrlNode)) {
    return {rootRef: ctrlRef};
  }

  const popupComps = [Dropdown, Tooltip, Select];
  if (popupComps.includes(ctrlNode.type)) {
    return {ctrlRef: ctrlRef};
  }
  return {ref: ctrlRef};
};