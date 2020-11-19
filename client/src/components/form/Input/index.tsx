import * as React from "react";

import { BaseInput } from "../interface";

import "./input.scss";

const Input = (props: BaseInput) => {
  const className = props.className || "";

  return (
    <input
      {...props}
      className={`input ${className}`}
    />
  );
}

Input.defaultProps = {
  type: "text",
  defaultValue: ""
};

export default Input;
