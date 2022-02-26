import React from 'react';
import AvatarGroup from './AvatarGroup';
import { AvatarProps } from './Avatar';

interface RootComponent extends React.ForwardRefExoticComponent<AvatarProps> {
  Group: typeof AvatarGroup;
}

declare const Avatar: RootComponent;

export type { AvatarProps } from './Avatar';
export type { AvatarGroupProps } from './AvatarGroup';
export default Avatar;
