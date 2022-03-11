import React from 'react';
import { CommonProps } from '../generic';

export type ContainerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  autoAdjust?: boolean;
} & CommonProps<HTMLDivElement>;

declare const Container: React.ForwardRefExoticComponent<ContainerProps>;
export default Container;
