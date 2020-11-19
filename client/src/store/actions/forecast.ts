import { SET_LOCATION, SET_CURRENT } from "../constants/forecast";
import { ForecastLocation, ForecastCurrent } from "../reducers/forecast";
import { Dispatch } from "redux";

export const setLocation = (location:ForecastLocation) => (dispatch: Dispatch) => dispatch({
  type: SET_LOCATION,
  payload: location,
});

export const setCurrent = (current: ForecastCurrent) => (dispatch: Dispatch) => dispatch({
  type: SET_CURRENT,
  payload: current
});