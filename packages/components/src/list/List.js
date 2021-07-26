import React, {useCallback, useMemo, useRef} from "react";
import {convertToArray} from "../Utils";
import clsx from "clsx";
import Ripple from "../common/Ripple";
import PropTypes from "prop-types";
import {adjustItems} from "../common/Constants";

const ItemType = {
  line: 'line',
  simple: 'simple',
  panel: 'panel'
}

const Item = React.forwardRef((props, ref) => {
    const rippleRef = useRef(null);

    //bind ripple related event listeners
    const updatedProps = Ripple.useRippleEvent({
      rippleRef,
      rootProps: props,
      hasRipple: props.hasRipple,
    });

    const {
      className = 'list-item',
      extraClassname,
      icon,
      title,
      type = ItemType.line,
      description,
      actions,
      children,
      vertical = false,
      moreElements,
      hasRipple = true,
      rippleColor = '#333',
      compact = false,
      justifyActions = 'start',
      ...rest
    } = updatedProps;

    const more = useMemo(() => convertToArray(moreElements)
      .map((elem, i) => React.cloneElement(elem, {key: `more-${i}`})), [moreElements]);

    const rippleExists = useMemo(() => type === ItemType.line && hasRipple, [hasRipple, type]);
    const clsName = clsx(extraClassname, className, {
      vertical,
      'with-ripple': rippleExists,
      compact,
      'normal': !compact
    });
    const listCntCls = clsx('list-content', {vertical});

    const justifyCls = adjustItems(justifyActions);
    const listActionsCls = clsx('list-actions', {vertical}, justifyCls);

    const actionArray = convertToArray(actions);

    const actionContent = useMemo(() => actionArray.length > 0 && <div className={listActionsCls}>
      {
        actionArray.map((act, i) => {
          return <div className="list-action" key={'action-' + i}>
            {act}
          </div>
        })
      }
    </div>, [actionArray, listActionsCls]);

    const getItemDetails = useCallback((hasActions = true) =>
      <>
        {icon && <div className="list-icon">{icon}</div>}
        {
          (title || description) &&
          <div className="list-text">
            {title && <div className="list-title">{title}</div>}
            {description && <div className="list-desc">{description}</div>}
          </div>
        }
        {
          hasActions && actionContent
        }
      </>, [actionContent, icon, description, title]);

    const body = useMemo(() => {
        if (type === ItemType.simple) {
          return getItemDetails(true);
        }
        if (type === ItemType.panel) {
          return <div className={listCntCls}>
            <div className="list-details">
              <div className="list-line">{getItemDetails(false)}</div>
              {children && <div className="list-line-content">{children}</div>}
            </div>
            {actionContent}
          </div>;
        }
        return children;
      }
      , [actionContent, children, getItemDetails, listCntCls, type]);

    return <div className={clsName} ref={ref} {...rest}>
      {body}
      {type === ItemType.panel && <div className="list-more">{more}</div>}
      {rippleExists && <Ripple ref={rippleRef} color={rippleColor}/>}
    </div>;
  }
);

const List = React.forwardRef((props, ref) => {
    const {
      className,
      extraClassName,
      header,
      footer,
      children,
      ...rest
    } = props;

    return <div className="common-list" {...rest}>
      {header && <div className="list-header">{header}</div>}
      {
        children && <div className="list-lines">{children}</div>
      }
      {footer && <div className="list-footer">{footer}</div>}
    </div>;
  }
);

Item.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(ItemType)),
  description: PropTypes.node,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  vertical: PropTypes.bool,
  moreElements: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  hasRipple: PropTypes.bool,
  rippleColor: PropTypes.string
}

List.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
}

List.Item = Item;

export default List;