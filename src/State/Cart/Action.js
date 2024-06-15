import { API_BASE_URL, api } from "../../config/apiConfig.js";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const addItemToCart = (reqData) => async (dispatch) => {
  console.log(" add Item to cart reqData is : ", reqData);
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
    const { data } = await api.put("/api/cart/add", reqData);
    // console.log("add item to cart___ ", data);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload: error.message,
    });
  }
};

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  try {
    const { data } = await api.get(`/api/cart/`);
    // console.log("cart___  ", data);
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload: error.message,
    });
  }
};
export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    await api.delete(`/api/cart_items/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (error) {
    dispatch({
      type: REMOVE_CART_ITEM_FAILURE,
      payload: error.message,
    });
  }
};

// self code
// export const updateCartItem = (reqData) => async (dispatch) => {
//   dispatch({ type: UPDATE_CART_ITEM_REQUEST });
//   try {
//     const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`);
//     dispatch({
//       type: UPDATE_CART_ITEM_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_CART_ITEM_FAILURE,
//       payload: error.message,
//     });
//   }
// };

export const updateCartItem = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${reqData.jwt}`,
    //     "Content-Type":"application/json"
    //   },
    // };
    const { data } = await api.put(
      `/api/cart_items/${reqData.cartItemId}`,
      reqData.data
    );
    // console.log("udated cartitem2 ", data);
    dispatch({
      type: UPDATE_CART_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// new code
// export const updateCartItem = (reqData) => async (dispatch) => {
//   console.log("update Cart Item reqData is: ", reqData);
//   dispatch({ type: UPDATE_CART_ITEM_REQUEST });
//   try {
//     const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`);
//     console.log("update cart item response: ", data);
//     dispatch({
//       type: UPDATE_CART_ITEM_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log("update cart item error: ", error.message);
//     dispatch({
//       type: UPDATE_CART_ITEM_FAILURE,
//       payload: error.message,
//     });
//   }
// };
