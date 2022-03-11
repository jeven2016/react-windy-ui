import { AlignType, CommonProps, JustifyType } from '../generic';

export type GridRowProps = {
  justify?: JustifyType;
  align?: AlignType;
  gutter?: { x: number; y: number };
  style?: React.CSSProperties;
} & Omit<CommonProps<HTMLDivElement>, 'align'>;

declare const Row: React.ForwardRefExoticComponent<GridRowProps>;
export default Row;
