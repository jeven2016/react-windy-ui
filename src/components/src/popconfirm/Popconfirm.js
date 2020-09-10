import React, {useCallback, useRef} from "react";
import Popover from "../popover";
import {IconWarning2} from "../Icons";
import Button from "../button";
import {JustifyContentType, PopupPosition} from "../common/Constants";
import clsx from "clsx";

const PopConfirm = React.forwardRef((props, ref) => {
  const {
    className = 'pop-confirm',
    extraClassName,
    body,
    okText = "Yes",
    cancelText = "No",
    children,
    onOk,
    onCancel,
    icon,
    justifyFooter = JustifyContentType.end,
    position = PopupPosition.bottom,
    ...otherProps
  } = props;
  const popupRef = useRef(null);
  const justifyCls = JustifyContentType[justifyFooter];

  const clsName = clsx(extraClassName, className);

  const footerClsName = clsx('pop-footer', {
    [justifyCls]: justifyCls,
  });

  const closePopover = useCallback(() => {
    popupRef.current.changeActive(false);
  }, [popupRef]);

  const handleOk = useCallback((e) => {
    onOk && onOk(e);
    closePopover();
  }, [closePopover]);

  const handleCancel = useCallback((e) => {
    onCancel && onCancel(e);
    closePopover();
  }, [closePopover]);

  const bodyCnt = <div className={clsName}>
    <div className="pop-row">
      <div className="icon-column">
        {icon ? icon : <IconWarning2/>}
      </div>
      <div className="popup-body">
        {body}
      </div>
    </div>
    <div className={footerClsName}>
      <span>
        <Button color="primary" size="small" onClick={handleOk}>
          {okText}
        </Button>
        <Button size="small" onClick={handleCancel}>
          {cancelText}
        </Button>
      </span>
    </div>
  </div>;

  return <Popover popupInstanceRef={popupRef} body={bodyCnt} position={position}
                  autoWidth={true} {...otherProps}>
    {children}
  </Popover>

});

export default PopConfirm;