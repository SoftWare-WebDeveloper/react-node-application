import * as React from "react";
import classNames from "classnames";

import { ImageProps } from "./inteface";

const Image = ({ src, alt, className }: ImageProps) => {
  const imageClassName = classNames(className);
  return (<img className={imageClassName} src={`/src/assets/images/${src}`} alt={alt} />);
};

export default Image;