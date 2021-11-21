import * as React from "react";
import Button from "button-bit-assignment/Button";

export type CardProps = {
  mainText: string;
  subText: string;
};

export default function ({ mainText, subText }: CardProps) {
  return (
    <div>
      <h1>{mainText}</h1>
      <h2>{subText}</h2>
      <Button label="Hello world" />
    </div>
  );
}
