import { API_BASE_URL, api } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  // FIND_PRODUCTS_FAILURE,
  // FIND_PRODUCTS_REQUEST,
  // FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  // console.log("All Request data is : ", reqData);

  const {
    colors,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
    const { data } = await api.get(`/api/proudcts?color=${colors}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    // it will print data on console
    // console.log("Product Data is 4: ", data);

    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_FAILURE, payload: error.message });
  }
};

// find product by id
export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/proudcts/id/${reqData.productId}`);
    // it will print on console
    // console.log("data is :", data)
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log("find Product By id error is : ", error);
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

// create product self code 
// export const createProduct = (product) => async (dispatch) => {
//   console.log("product is : ", product);
//   try {
//     dispatch({ type: CREATE_PRODUCT_REQUEST });
//     const { data } = await api.post(`/api/admin/products/`, product);
//     // console.log("created Product is : ", data);
//     dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
//   } catch (error) {
//     console.log("create product error : ", error);
//     dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
//   }
// };


// copy code 
export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { data } = await api.post(
      `${API_BASE_URL}/api/admin/products/`,
      product.data
    );

    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });

    console.log("created product ", data);
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// delete product
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const { data } = await api.delete(`/api/admin/products/${productId}`);
    console.log("delete Product ; ", data);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    console.log("delete product error : ", error);
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};

// update product
// export const updateProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PRODUCT_REQUEST });

//     const { data } = await api.put(`/api/admin/products/update/${product.productId}`,product);
// console.log("update product ",data)
//     dispatch({
//       type: UPDATE_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const { data } = await api.put(
      `/api/admin/products/update/${product.productId}`,
      product
    );
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log("update Product error : ", error);
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
  }
};
