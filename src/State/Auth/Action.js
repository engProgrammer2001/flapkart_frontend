import axios from "axios";
import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { API_BASE_URL, api } from "../../config/apiConfig";

const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

// this is for the user register
export const register = (userData) => async (dispatch) => {
  console.log("user data is : ", userData);
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;

    // console.log("register user ", user);

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
      localStorage.setItem("email", user.user.firstName);
      localStorage.setItem("lastName", user.user.lastName);
      localStorage.setItem("role", user.user.role);
    }
    // it will print data on console
    // console.log("user ", user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// this is for the login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    // it will print data on console
    console.log("user data is : ", user);

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
      localStorage.setItem("email", user.user.firstName);
      localStorage.setItem("lastName", user.user.lastName);
      localStorage.setItem("role", user.user.role);
    }
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// get user method
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    // console.log("user ", response.data)
    const user = response.data;
    // it will print data on console
    // console.log("user ", user)
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users`);
    console.log("All users is 1:  ", data);
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_USERS_FAILURE, payload: error.message });
  }
};
