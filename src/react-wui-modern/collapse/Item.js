import React, {useContext, useMemo} from 'react';
import CollapsePanel from './CollapsePanel';
import Card from '../card/Card';
import {convertToArray, isNil} from '../Utils';
import {CollapseContext} from '../common/Context';
import {IconArrowRight} from '../Icons';
import clsx from 'clsx';

const Item = React.forwardRef((props, ref) => {
  const {
    children,
    header,
    disabled = false,
    value,
    hasBackground = false,
    moreItems = [],
    ...otherProps
  } = props;
  const activeContext = useContext(CollapseContext);
  const currentActive = activeContext.currentActive;
console.log(activeContext)
  const items = useMemo(() => {
    return convertToArray(moreItems);
  }, [moreItems]);

  const isCollapsed = useMemo(() => {
    if (!isNil(currentActive) && !isNil(value)) {
      return !currentActive.includes(value);
    }
    return true;
  }, [value, currentActive]);

  const clickHeader = () => {
    if (disabled || isNil(value)) {
      return;
    }
    activeContext.clickItem(value, !isCollapsed);
  };

  const innerClsName = clsx('inner', {
    'left-icon-column': activeContext.iconPosition === 'left',
    'right-icon-column': activeContext.iconPosition === 'right',
    disabled,
  });

  let iconContent = null;
  if (activeContext.hasCollapseIcon) {
    const icon = isNil(activeContext.collapseIcon)
        ? <IconArrowRight/>
        : activeContext.collapseIcon;

    iconContent = <div
        className={`icon-column ${isCollapsed ? '' : 'expand'}`}>
      {icon}
    </div>;
  }

  return <>
    <Card block {...otherProps}
          hasBorder={activeContext.hasBorder}
          hasBox={false}>
      <Card.Header
          extraClassName={`collapse-header ${isCollapsed ? 'collapsed' : ''}`}
          hasBackground={hasBackground}
          onClick={clickHeader}>
        <div className="header-row">
          <div className={innerClsName}>
            {iconContent}
            <div className="header-info">
              {header}
            </div>
          </div>
          {
            items.map((item, index) =>
                <div key={`more-${index}`} className={`header-more ${disabled
                    ? 'disabled'
                    : ''}`}>{item}</div>)
          }
        </div>

      </Card.Header>
      <CollapsePanel value={value} collapse={isCollapsed}>
        {children}
      </CollapsePanel>
    </Card>
  </>;
});

export default Item;