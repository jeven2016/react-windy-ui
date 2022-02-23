import { Size } from '../generic';
import React from 'react';

export type Shape = 'circle' | 'square' | 'round';

export interface AvatarProps {
  className?: string;
  extraClassName?: string;
  size?: Size;
  shape?: Shape;
  src?: string; //image src
  alt?: string;
  style?: React.CSSProperties;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  hasBox?: boolean;
  isAccessory?: boolean;
  accessory?: React.ReactNode;
  accessoryStyle?: React.CSSProperties;
}

const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>>;
export default Avatar;
