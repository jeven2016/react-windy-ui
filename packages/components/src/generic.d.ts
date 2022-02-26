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

export type DivProps<P> = ClassNameRefProps<P> & React.HTMLAttributes<HTMLDivElement>;
