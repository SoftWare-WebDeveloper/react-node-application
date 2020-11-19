import * as React from "react";
import { useEffect } from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import WeatherContainer from "../../../../components/weather/Container";
import SidePanel from "../../../../bundles/weather/SidePanel";
import MainPanel from "../../../../bundles/weather/MainPanel";
import Loader from "../../../../components/Loader";

import { getForecast } from "../../../../utils/api/weather";
import { setLocation, setCurrent } from "../../../../store/actions/forecast";
import { WEEK_DAYS } from "../../../../utils/date";
import "./weather-home.scss";

const WeatherHome = () => {
  const dispatch = useDispatch();

  const city = useSelector(({forecast: { location: { city } }}: RootStateOrAny) => city);

  useEffect(() => {
    getForecast(city || "London")
      .then(json => {
        const {
          data: {
            current: { feelslike_c, feelslike_f },
            location: { name },
          }
        } = json;

        const date = new Date();

        setLocation({city: name})(dispatch);
        setCurrent({
          feelslike_c, feelslike_f,
          time: `${date.getHours()}:${date.getMinutes()}`,
          day: WEEK_DAYS[date.getDay()]
        })(dispatch);
      })
  }, [city]);

  return (
    <WeatherContainer>
      <div className="weather-app">
        <Loader/>
        <SidePanel/>
        <MainPanel/>
      </div>
    </WeatherContainer>
  )
};

export default WeatherHome;
