import * as React from "react";
import { useCallback } from "react";
import classNames from "classnames";

import { SwitcherProps } from "./interface";

import "./toggle.scss";

const Toggle = ({ customClass, options, onToggle, defaultValue }: SwitcherProps) => {
  const classes = classNames("toggle", { [customClass]: !!customClass });

  return (
    <ul className={classes}>
      {
        options.map(({ id, text }) => {
          const optionClasses = classNames("--option", { "--active": id === defaultValue });

          return (
            <li
              key={id}
              className={optionClasses}
              onClick={onToggle}
            >
              {text || ''}
            </li>
          );
        })
      }
    </ul>
  )
};

export default Toggle;
