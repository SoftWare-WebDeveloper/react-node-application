import * as React from "react";

import Image from "../../Image";

import { CurrentForecastProps } from "./interface";
import "./current-forecast.scss";

const CurrentForecast = (props: CurrentForecastProps) => {
  const { forecastKey, forecastValue, day, time, type } = props;

  return (
    <div className="current-big-forecast">
      <div className="current-big-forecast--image">
        <Image alt="forecast-image" src={`weather/${forecastKey}.png`} />
      </div>
      <div className="current-big-forecast--info">
        <div className="current-big-forecast--info--temperature">
          <span>{forecastValue}º{type}</span>
        </div>
        <div className="current-big-forecast--info--day-time">
          <span>{day}</span>
          <span>,&nbsp;</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
};

export default CurrentForecast;
