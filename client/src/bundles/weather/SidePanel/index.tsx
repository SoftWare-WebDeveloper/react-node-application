import * as React from "react";
import {RootStateOrAny, useSelector, useDispatch} from "react-redux";
import { FaSearch, MdMyLocation } from "react-icons/all";

import IconsInput from "../../../components/form/IconsInput";
import CurrentForecast from "../../../components/weather/CurrentForecast";

import { setLocation } from "../../../store/actions/forecast";
import "./side-panel.scss";

const SidePanel = () => {
  const dispatch = useDispatch();

  const { feelslike_c, feelslike_f, day, time } = useSelector(({ forecast: { current }  }:RootStateOrAny) => current);
  const degreesType = useSelector(({ settings: { degreesType } }: RootStateOrAny) => degreesType);

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLocation({
      city: e.currentTarget.value
    })(dispatch);
  };

  return (
    <aside className="weather--side-panel">
      <div className="weather--side-panel--search">
        <IconsInput
          prevIcon={() => (<FaSearch/>)}
          afterIcon={() => (<div className="weather--side-panel--search--location" ><MdMyLocation/></div>)}
          wrapperClass="weather--side-panel--search--input-wrapper"
          name="weather-search"
          placeholder="Search for places ..."
          onBlur={handleSearch}
        />
      </div>
      <CurrentForecast
        forecastKey="sunny"
        forecastValue={degreesType === "c" ? feelslike_c : feelslike_f}
        type={degreesType === "c" ? "C" : "F"}
        day={day}
        time={time}
      />
    </aside>
  )
};

export default SidePanel;
