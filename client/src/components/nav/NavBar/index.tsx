import * as React from "react";
import { useState, useCallback } from "react";
import classNames from "classnames";

import { NavBarProps } from "../interface";

import "./nav-bar.scss";

const NavBar = ({ options, onSwitch, customClass }: NavBarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const classes = classNames("nav-bar", { [customClass]: !!customClass });

  const handleSwitch = useCallback(i => () => setActiveIndex(i), []);

  return (
    <ul className={classes}>
      {
        options.map(({ id, value }, i) => {
          const optionClasses = classNames("--option", { "--active": i === activeIndex });

          return (
            <li
              className={optionClasses}
              key={id}
              onClick={handleSwitch(i)}
            >{value}</li>
          );
        })
      }
    </ul>
  )
};

export default NavBar;
