import { CommonProps, Size } from '../generic';
import React from 'react';

export type InputGroupProps = {
  block?: boolean;
  size?: Size;
  normal?: boolean;
} & CommonProps<HTMLElement>;

export type InputGroupLabelProps = { compact?: boolean } & CommonProps<HTMLDivElement>;
export type InputGroupItemProps = { autoScale?: boolean } & CommonProps<HTMLDivElement>;

declare const Label: React.ForwardRefExoticComponent<InputGroupLabelProps>;
declare const Item: React.ForwardRefExoticComponent<InputGroupItemProps>;

interface RootComponent extends React.ForwardRefExoticComponent<InputGroupProps> {
  Label: typeof Label;
  Item: typeof Item;
}

declare const InputGroup: RootComponent;

export default InputGroup;
