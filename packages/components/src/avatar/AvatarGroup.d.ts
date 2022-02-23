import { AvatarProps } from './Avatar';
import React from 'react';

export type AvatarGroupProps = {
  extraClassName: string;
  className: string;
  max: number;
  extraAvatarStyle?: React.CSSProperties;
  extraAvatarProps?: AvatarProps;
} & React.HTMLAttributes<HTMLDivElement>;

const AvatarGroup: React.ForwardRefExoticComponent<
  AvatarGroupProps & React.RefAttributes<HTMLElement>
>;
export default AvatarGroup;
