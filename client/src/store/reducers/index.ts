import { combineReducers } from "redux";

// Reducers
import loader from "./loader";
import forecast from "./forecast";
import settings from "./settings";

export default combineReducers({
  loader,
  forecast,
  settings,
});
