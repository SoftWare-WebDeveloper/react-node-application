import { IS_LOADING } from "../constants/loader";

export const setIsLoading = (isLoading = false) => dispatch => dispatch({
  type: IS_LOADING,
  payload: isLoading
});