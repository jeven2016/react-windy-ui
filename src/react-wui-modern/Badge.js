import React, {useEffect} from 'react';
import clsx from 'clsx';
import {isBoolean, isNil, validate} from './Utils';

const BadgeType = {
  normal: 'normal', dot: 'dot', tag: 'tag',
};

const Color = {
  info: 'info',
  ok: 'ok',
  gray: 'gray',
  warning: 'warning',
  error: 'error',
  dark: 'dark',
};

function Badge(props) {
  const {type, appendClass, children, body, color, style, active, ...otherProps} = props;

  let activeBadge = active;
  if (isNil(active)) {
    activeBadge = true;
  }

  validate(isBoolean(activeBadge),
      'the Badge active property should be a boolean value');

  let badgeType = BadgeType[type];
  validate(!isNil(badgeType), 'the badge type is required');

  let colorType = Color[color];
  let contentBackground = null;
  if (isNil(colorType)) {
    contentBackground = {background: colorType};
  }

  useEffect(() => {
    // console.log("component initialized");
    // return () => console.log("component unmounted");
  });

  let clsName = clsx('badge', {
    [badgeType]: badgeType,
    [colorType]: colorType,
  });

  let badgeContent = body;
  let chd = children;
  if (badgeType === BadgeType.tag) {
    badgeContent = <>{body}{chd}</>;
    chd = null;
  }

  return (
      <div className={clsName} style={style}>
        <div className="content" style={{
          display: activeBadge ? 'inline-flex' : 'none', ...contentBackground,
        }}>{badgeContent}</div>
        {chd}
      </div>
  );
}

export default Badge;