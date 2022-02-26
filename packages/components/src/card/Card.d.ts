import React from 'react';
import { ClassNameRefProps, DivProps } from '../generic';
import Curtain from './Curtain';

export type CardProps = {
  block?: boolean;
  autoScale?: boolean;
  hasBorder?: boolean;
  hasBox?: boolean;
  hasWidth?: boolean;
} & DivProps<HTMLDivElement>;

export type BodyProps = DivProps<HTMLDivElement>;
export type FooterProps = DivProps<HTMLDivElement>;
export type HeaderProps = DivProps<HTMLDivElement>;
export type RowProps = DivProps<HTMLDivElement>;
export type OverlayTitleProps = DivProps<HTMLDivElement>;
export type CardImageProps = { autoScale?: boolean } & DivProps<HTMLDivElement>;
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
