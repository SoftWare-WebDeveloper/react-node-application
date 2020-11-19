import * as React from "react";
import { FunctionComponent } from "react";

import "./container.scss";

const WeatherContainer: FunctionComponent = ({ children }) => {
  return (
    <main className="weather-container">
      {children}
    </main>
  )
};

export default WeatherContainer;
