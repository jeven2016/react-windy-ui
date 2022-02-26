import React from "react";
import {DivProps} from "../generic";

export type ContainerProps = {
    size?: 'sm'| 'md'| 'lg'| 'xl';
    autoAdjust?: boolean;
} & DivProps<HTMLDivElement>;

declare const Container: React.ForwardRefExoticComponent<ContainerProps>;
export default Container;