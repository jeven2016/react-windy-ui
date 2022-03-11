import { CommonProps, Direction } from '../generic';
import React, { MouseEvent } from 'react';

export type ErrorType = 'error' | 'warning' | 'normal';

export type StepProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  errorType?: ErrorType;
  disabled?: boolean;
  status?: 'finished' | 'processing' | 'todo';
} & CommonProps<HTMLDivElement>;

declare const Step: React.ForwardRefExoticComponent<StepProps>;

export type StepperProps = {
  activeStep?: number;
  defaultActiveStep?: number;
  borderedIcon?: boolean;
  direction?: Direction;
  stepDirection?: Direction;
  dotIcon?: boolean;
  reverse?: boolean;
  solidDot?: boolean;
  grayDot?: boolean;
  errorType?: ErrorType;
  errorIcon?: React.ReactNode;
  warningIcon?: React.ReactNode;
  showErrorIcon?: boolean;
  showIcon?: boolean;
  onClick?: (index: number, e: MouseEvent) => void;
  hasRipple?: boolean;
  rippleColor?: string;
} & CommonProps<HTMLDivElement>;

interface RootComponent extends React.ForwardRefExoticComponent<StepperProps> {
  Step: typeof Step;
}

declare const Stepper: RootComponent;
export default Stepper;
