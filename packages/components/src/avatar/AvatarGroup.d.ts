import { AvatarProps } from './Avatar';
import React from 'react';
import { CommonProps } from '../generic';

export type AvatarGroupProps = Partial<
  {
    extraClassName?: string;
    className?: string;
    max?: number;
    extraAvatarStyle?: React.CSSProperties;
    extraAvatarProps?: AvatarProps;
  } & CommonProps<HTMLDivElement>
>;

declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps>;
export default AvatarGroup;
