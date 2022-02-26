import { DivProps, Size } from '../generic';
import React from 'react';

export type AvatarShape = 'circle' | 'square' | 'round';

export type AvatarProps = {
  size?: Size;
  shape?: AvatarShape;
  src?: string; //image src
  alt?: string;
  style?: React.CSSProperties;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  hasBox?: boolean;
  isAccessory?: boolean;
  accessory?: React.ReactNode;
  accessoryStyle?: React.CSSProperties;
} & DivProps<HTMLDivElement>;

declare const Avatar: React.ForwardRefExoticComponent<AvatarProps>;
export default Avatar;
