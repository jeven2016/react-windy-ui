import { Direction, JustifyType } from '../generic';
import { ColProps } from '../grid';

export type RootItemProps = {
  rootItem?: boolean;
  direction?: Direction;
  justify?: JustifyType;
  justifyLabel?: JustifyType;
  labelCol?: ColProps;
  controlCol?: ColProps;
  simple?: boolean;
  compact?: boolean;
};

declare const RootItem: React.ForwardRefExoticComponent<RootItemProps>;

export default RootItem;
