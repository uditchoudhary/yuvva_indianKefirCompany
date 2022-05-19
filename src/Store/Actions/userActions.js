import { authInstance as AUTH_API } from "../../services/axiosConfig";
import { LOG_IN, LOG_IN_ERR } from "./ActionTypes";

export const loginUser = (requestBody) => {
  return async (dispatch) => {
    try {
      const res = await AUTH_API.post("/login", requestBody);
      dispatch({
        type: LOG_IN,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: LOG_IN_ERR,
        payload: e,
      });
    }
  };
};
