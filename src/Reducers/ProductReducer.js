import productListArray from "../Components/ProductListArray";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
} from "../Constant/ProductConstant";

// import productListArray from "../Components/ProductListArray";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productCreateReducer = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { products: [...state.products], loading: true };

    case PRODUCT_CREATE_SUCCESS:
      return { products: [...state.products, action.payload] };

    case PRODUCT_CREATE_FAIL:
      return {
        products: [...state.products],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
