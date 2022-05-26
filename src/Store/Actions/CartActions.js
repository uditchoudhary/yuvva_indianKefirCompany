import { authInstance as AUTH_API } from "../../services/axiosConfig";
import * as actionTypes from "./ActionTypes";

export const getCartData = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.CART_FETCH_LOADING,
      payload: true,
    });
    await AUTH_API.get(`/cart`)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_CART_DATA,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.CART_FETCH_FAILURE,
          payload: err,
        });
      });
    dispatch({
      type: actionTypes.CART_FETCH_LOADING,
      payload: false,
    });
  };
};

export const addToCart = (item) => {
  return async (dispatch) => {
    await AUTH_API.post(`/cartadditem`, item)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_CART_DATA,
          payload: res.data,
        });
          alert("Added to add cart");

        // dispatch({
        //   type: actionTypes.ITEM_ADD_CART_SUCCESS,
        //   payload: true,
        // });
      })
      .catch((err) => {
          alert("Added to the cart")
        // dispatch({
        //   type: actionTypes.ITEM_ADD_CART_FAILED,
        //   payload: err,
        // });
      });
  };
};
