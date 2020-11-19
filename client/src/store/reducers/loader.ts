import { switchcase } from "../../utils/lib";
import { Action } from "../interfaces";
import { IS_LOADING } from "../constants/loader";

interface LoaderState {
  isLoading: boolean,
}

const initialState: LoaderState = {
  isLoading: false
};

const loaderReducer = (state = initialState, { type, payload }: Action) => (
  switchcase({
    [IS_LOADING]: {
      ...state,
      payload,
    }
  })(state)(type)
);

export default loaderReducer;