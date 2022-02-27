import React from 'react';

export type Size = 'large' | 'medium' | 'small';
export type ButtonShape = 'circle' | 'round';
export type ButtonType = 'button' | 'reset' | 'submit' | 'a';
export type TriggerType = 'hover' | 'click';

export type ClassNameRefProps<P> = {
  children?: React.ReactNode;
  className?: string;
  extraClassName?: string;
} & React.RefAttributes<P>;

export type CommonProps<P> = ClassNameRefProps<P> & React.HTMLAttributes<P>;

export type ElementProps = ClassNameRefProps<HTMLElement> & React.HTMLAttributes<HTMLElement>;

export type JustifyType = 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
export type AlignType = 'start' | 'end' | 'center';
