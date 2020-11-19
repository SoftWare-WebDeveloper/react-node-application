import { switchcase } from "../../utils/lib";
import { Action } from "../interfaces";
import { SET_DEGREES_TYPE, SET_FORECAST_DURING } from "../constants/settings";

export interface SettingsState {
  degreesType: "c" | "f",
  forecastDuring: "today" | "week"
}

const initialState:SettingsState = {
  degreesType: "c",
  forecastDuring: "today"
};

const settingsReducer = (state = initialState, { type, payload }: Action) => (
  switchcase({
    [SET_DEGREES_TYPE]: {
      ...state,
      degreesType: payload
    },
    [SET_FORECAST_DURING]: {
      ...state,
      forecastDuring: payload
    }
  })(state)(type)
);

export default settingsReducer;