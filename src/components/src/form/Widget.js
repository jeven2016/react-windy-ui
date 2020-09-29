import React from "react";
import {isNil} from "../Utils";

export default function Widget(props) {
  const {children} = props;
  let chd;
  if (!isNil(children)) {
    chd = React.Children.only(children);
  }
  return <>{chd}</>
}