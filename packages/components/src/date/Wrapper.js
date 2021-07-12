import React, {useCallback, useImperativeHandle, useMemo, useRef, useState} from "react";
import {PopupType} from "./DateUtils";
import Popup from "../popup/Popup";
import {PopupCtrlType} from "../common/Constants";
import Modal from "../modal";
import DateInput from "./DateInput";

const Wrapper = React.forwardRef((props, ref) => {
  const {
    position = 'bottomLeft',
    body,
    popupType = PopupType.popup,
    zIndex = 2000,
    onPopupChange,
    ...rest
  } = props;
  const popupRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const isModalType = popupType === PopupType.modal;

  const popupCtrl = useMemo(() => {
    return <DateInput {...rest}/>;
  }, [rest]);

  const activePopup = useCallback((active) => {
    if (isModalType) {
      setActiveModal(active);
    } else {
      popupRef.current.changeActive(active);
    }
  }, [isModalType]);

  const isPopupActive = useCallback(
    () => {
      return isModalType ? activeModal : popupRef.current.isActive;
    }, [activeModal, isModalType]);

  const togglePopup = useCallback(() =>
      activePopup(!isPopupActive())
    , [activePopup, isPopupActive]);

  useImperativeHandle(ref, () => ({
    togglePopup
  }));

  let pickerBody;
  if (popupType === PopupType.popup) {
    //note: the popup isn't controlled since the active property isn't set
    pickerBody = <Popup
      ref={popupRef}
      onChange={onPopupChange}
      activeBy={PopupCtrlType.click}
      position={position}
      autoClose={false}
      ctrlNode={popupCtrl}
      body={body}
      hasBorder={false}
      activePopup={activePopup}
      hasBox={true}
      zIndex={zIndex}
      {...rest}/>;
  } else {
    pickerBody = <>
      {popupCtrl}
      <Modal ref={popupRef} type="simple" center active={activeModal} hasDefaultWidth={false}
             onCancel={() => {
               onPopupChange && onPopupChange(false);
             }}>
        <Modal.Body>
          {body}
        </Modal.Body>
      </Modal>
    </>;
  }

  return pickerBody;

});

export default Wrapper;