import * as actiontypes from "./ActionTypes";
import { instance as API } from "../../services/axiosConfig";

export const getProductCategories = async (dispatch) => {
  try {
    const res = await API.get(`${process.env.REACT_APP_API}/categories`);
    dispatch({
        type: actiontypes.SET_CATEGORIES,
        payload: res.data
    })
  } catch (e) {
      dispatch({
          type: actiontypes.CATEGORIES_ERROR,
          payload: console.log(e)
      })
  }
};
