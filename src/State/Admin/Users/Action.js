import { api } from "../../../config/apiConfig";
import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "./ActionType";

export const getAllUsers = () => (dispatch) => {
  dispatch({ type: GET_ALL_USERS_REQUEST });
  try {
    const { data } = api.get(`/api/users/`);
    console.log("All users is 1:  ", data);
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_USERS_FAILURE, payload: error.message });
  }
};
