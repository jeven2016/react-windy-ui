import { CommonProps } from '../generic';

export type ListItemProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  type?: 'line' | 'simple' | 'panel';
  description?: React.ReactNode;
  actions?: React.ReactNode | React.ReactNode[];
  vertical?: boolean;
  moreElements?: React.ReactNode | React.ReactNode[];
  hasRipple?: boolean;
  rippleColor?: string;
} & CommonProps<HTMLDivElement>;

declare const Item: React.ForwardRefExoticComponent<ListItemProps>;

export type ListProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
} & CommonProps<HTMLDivElement>;

interface RootComponent extends React.ForwardRefExoticComponent<ListProps> {
  Item: typeof Item;
}

const List: RootComponent;
export default List;
