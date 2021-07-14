import React, {useCallback, useImperativeHandle, useMemo, useRef, useState} from "react";
import {PopupType} from "./DateUtils";
import Popup from "../popup/Popup";
import {PopupCtrlType} from "../common/Constants";
import Modal from "../modal";
import DateInput from "./DateInput";

const Wrapper = React.forwardRef((props, ref) => {
  const {
    disabled,
    position = 'bottomLeft',
    body,
    popupType = PopupType.popup,
    zIndex = 2000,
    onPopupChange,
    ctrlRef,
    ...rest
  } = props;
  const popupRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const isModalType = popupType === PopupType.modal;

  const handleInputClick = useCallback((next = true) => {
    if (isModalType) {
      setActiveModal(next);
      onPopupChange && onPopupChange(next);
    }
  }, [isModalType, onPopupChange]);

  const popupCtrl = useMemo(() => {
    return <DateInput ref={ctrlRef} onClick={handleInputClick} {...rest}/>;
  }, [ctrlRef, handleInputClick, rest]);

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
      disabled={disabled}
      onChange={onPopupChange}
      activeBy={PopupCtrlType.click}
      position={position}
      autoClose={false}
      ctrlNode={popupCtrl}
      body={body}
      hasBorder={false}
      hasBox={true}
      zIndex={zIndex}/>;
  } else {
    pickerBody = <>
      {popupCtrl}
      <Modal ref={popupRef} type="simple" center active={activeModal} hasDefaultWidth={false}
             onCancel={() => handleInputClick(false)}>
        <Modal.Body>
          {body}
        </Modal.Body>
      </Modal>
    </>;
  }

  return pickerBody;

});

export default Wrapper;