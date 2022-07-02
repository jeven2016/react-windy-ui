import React from "react";
import { AlignType, CommonProps, JustifyType } from "../generic";

export type BoxProps = {
  className?: string;
  extraClassName?: string;
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  center?: React.ReactNode;
  hasMarginBottom?: boolean;
  block?: boolean;
  autoEllipsis?: boolean;
  justify?: JustifyType;
  align?: AlignType;
  justifyLeft?: JustifyType;
  alignLeft?: AlignType;
  justifyCenter?: JustifyType;
  alignCenter?: AlignType;
  justifyRight?: JustifyType;
  alignRight?: AlignType;
  hasPadding?: boolean;
  growLeft?: boolean;
  growRight?: boolean;
  growCenter?: boolean;
} & CommonProps<HTMLDivElement>;

const Box: React.ForwardRefExoticComponent<BoxProps>;

export default Box;
