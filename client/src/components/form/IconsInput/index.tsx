import * as React from "react";

import Input from "../Input";
import { IconsInput } from "../interface";

import "./icons-input.scss";

const IconsInput = (props: IconsInput) => {
  const inputProps = { ...props };
  const { prevIcon: PrevIcon, afterIcon: AfterIcon, wrapperClass } = inputProps;
  delete inputProps.prevIcon;
  delete inputProps.afterIcon;
  delete inputProps.wrapperClass;

  return (
    <div className={`icons-input-wrapper ${wrapperClass || ''}`}>
      {
        PrevIcon && <PrevIcon/>
      }
      <Input {...inputProps} />
      {
        AfterIcon && <AfterIcon/>
      }
    </div>
  );
};

export default IconsInput;
