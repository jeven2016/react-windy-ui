import React from "react";
import { Typography } from "react-windy-ui";

export default function Typography1() {
  return (
    <>
      <Typography nativeType="h1">h1. Windy UI heading</Typography>
      <Typography nativeType="h2">h2. Windy UI heading</Typography>
      <Typography nativeType="h3">h3. Windy UI heading</Typography>
      <Typography nativeType="h4">h4. Windy UI heading</Typography>
      <Typography nativeType="h5">h5. Windy UI heading</Typography>
      <Typography nativeType="h6">h6. Windy UI heading</Typography>
      <span className="h4">h4. Span Heading</span>
    </>
  );
}
