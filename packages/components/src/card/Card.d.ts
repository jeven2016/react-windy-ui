import React from "react";
import { ClassNameRefProps, CommonProps } from "../generic";
import Curtain from "./Curtain";

export type CardProps = {
  block?: boolean;
  autoScale?: boolean;
  rise?: boolean;
  hasBorder?: boolean;
  hasBox?: boolean;
  hasWidth?: boolean;
} & CommonProps<HTMLDivElement>;

export type BodyProps = CommonProps<HTMLDivElement>;
export type FooterProps = CommonProps<HTMLDivElement>;
export type HeaderProps = CommonProps<HTMLDivElement>;
export type RowProps = CommonProps<HTMLDivElement>;
export type OverlayTitleProps = CommonProps<HTMLDivElement>;
export type CardImageProps = { autoScale?: boolean } & CommonProps<HTMLDivElement>;
export type ImageProps = ClassNameRefProps<HTMLImageElement> &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Body: React.ForwardRefExoticComponent<BodyProps>;
const Footer: React.ForwardRefExoticComponent<FooterProps>;
const Header: React.ForwardRefExoticComponent<HeaderProps>;
const Row: React.ForwardRefExoticComponent<RowProps>;
const OverlayTitle: React.ForwardRefExoticComponent<OverlayTitleProps>;
const CardImage: React.ForwardRefExoticComponent<CardImageProps>;
const Image: React.ForwardRefExoticComponent<ImageProps>;

interface RootComponent extends React.ForwardRefExoticComponent<CardProps> {
  Body: typeof Body;
  Footer: typeof Footer;
  Header: typeof Header;
  Row: typeof Row;
  OverlayTitle: typeof OverlayTitle;
  CardImage: typeof CardImage;
  Image: typeof Image;
  Curtain: typeof Curtain;
}

declare const Card: RootComponent;
export default Card;
