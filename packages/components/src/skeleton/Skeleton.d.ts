import { CommonProps } from '../generic';

export type SkeletonItemProps = {
  type?: 'square' | 'circle';
  width?: number | string;
  height?: number | string;
} & Omit<CommonProps<HTMLDivElement>, 'width' | 'height'>;

declare const SkeletonItem: React.ForwardRefExoticComponent<SkeletonItemProps>;

export type SkeletonProps = CommonProps<HTMLDivElement>;

interface RootComponent extends React.ForwardRefExoticComponent<SkeletonProps> {
  Item: typeof SkeletonItem;
}

declare const Skeleton: RootComponent;

export default Skeleton;
