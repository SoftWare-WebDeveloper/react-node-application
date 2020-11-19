import { Dispatch } from "redux";
import { SET_DEGREES_TYPE, SET_FORECAST_DURING } from "../constants/settings";

export const setDegreesType = (degreesType: string) => (dispatch: Dispatch) => dispatch({
  type: SET_DEGREES_TYPE,
  payload: degreesType,
});

export const setForecastDuring = (during: string) => (dispatch: Dispatch) => dispatch({
  type: SET_FORECAST_DURING,
  payload: during,
})