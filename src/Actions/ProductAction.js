import productListArray from "../Components/ProductListArray";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
} from "../Constant/ProductConstant";

export const listProduct = (dispatch,products) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // const data  = productListArray;
    // console.log("Action Data List", data);
    // console.log(products)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createProduct = (dispatch, userData) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const data = userData;
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    console.log("CreatePost", data);
  } catch (error) {}
};
