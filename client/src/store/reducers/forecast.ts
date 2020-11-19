import { switchcase } from "../../utils/lib";
import { Action } from "../interfaces";
import { SET_CURRENT, SET_LOCATION } from "../constants/forecast";

export interface ForecastLocation {
  city: string
}

export interface ForecastCurrent {
  feelslike_c: number,
  feelslike_f: number,
  time: string,
  day: string
}

export interface ForecastState {
  location: ForecastLocation,
  current: ForecastCurrent,
}

const initialState: ForecastState = {
  location: {
    city: ''
  },
  current: {
    feelslike_c: 0,
    feelslike_f: 0,
    time: '',
    day: ''
  },
};

const forecastReducer = (state = initialState, { type, payload }: Action) => (
  switchcase({
    [SET_LOCATION]: {
      ...state,
      // @ts-ignore
      location: { ...payload }
    },
    [SET_CURRENT]: {
      ...state,
      // @ts-ignore
      current: { ...payload }
    }
  })(state)(type)
);

export default forecastReducer;