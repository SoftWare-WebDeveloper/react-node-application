import * as React from "react";
import {RootStateOrAny, useSelector, useDispatch} from "react-redux";

import NavBar from "../../../components/nav/NavBar";
import Toggle from "../../../components/Toggle";
import Image from "../../../components/Image";
import Widget from "../../../components/Windget";
import { SMALL_WIDGET_TYPE } from "../../../components/Windget/config";

import { WEEK_DAYS } from "../../../utils/date";
import { NAV_OPTIONS, TOGGLE_OPTIONS } from "./config";
import { setDegreesType } from "../../../store/actions/settings";

import "./main-panel.scss";

const testForecast = 'rain';

const MainPanel = () => {

  const dispatch = useDispatch();
  const degreesType = useSelector(({ settings: { degreesType } }: RootStateOrAny) => degreesType);

  const handleToggle = () => {
    setDegreesType(degreesType === "c" ? "f" : "c")(dispatch);
  };

  return (
    <div className="weather--main-panel">
      <div className="--header">
        <NavBar options={NAV_OPTIONS} customClass="--mode-nav-bar" />
        <Toggle options={TOGGLE_OPTIONS} onToggle={handleToggle} defaultValue={degreesType} customClass="--mode-nav-bar" />
      </div>
      <div className="--body">
        <div className="--widgets">
          {
            WEEK_DAYS.map((dayName) => (
              <Widget
                type={SMALL_WIDGET_TYPE}
                title={dayName}
                Component={() => (
                  <Image
                    className="small-widget-image"
                    src={`weather/${testForecast}.png`}
                    alt={`${testForecast}-icon`}
                  />
                )}
                footer="15º / 13º"
              />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default MainPanel;
