import { CommonProps } from '../generic';
import React from 'react';

export type CarouselProps = {
  defaultActive?: number;
  active?: number;
  position?: 'left' | 'top' | 'right' | 'bottom';
  hasIndicators?: boolean;
  indicatorType?: 'circle' | 'bar';
  axis?: 'x' | 'x-reverse';
  onChange: (number) => void;
  interval?: number;
  disabled?: boolean;
} & CommonProps;

const Carousel: React.ForwardRefExoticComponent<CarouselProps>;
export default Carousel;
