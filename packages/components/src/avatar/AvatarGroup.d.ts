import { AvatarProps } from './Avatar';
import React from 'react';
import { DivProps } from '../generic';

export type AvatarGroupProps = Partial<
  {
    extraClassName?: string;
    className?: string;
    max?: number;
    extraAvatarStyle?: React.CSSProperties;
    extraAvatarProps?: AvatarProps;
  } & DivProps<HTMLDivElement>
>;

declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps>;
export default AvatarGroup;
