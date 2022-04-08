import { LOGIN_STATUS } from "../../Utilities/Cookies/Constants";
import getCookies from "../../Utilities/Cookies/getCookies";
import setCookies from "../../Utilities/Cookies/setCookies";
import * as actions from "../Actions/ActionTypes";

const GlobalReducer = (state, action) => {
  console.info(action, state);
  switch (action.type) {
    case actions.LOG_IN:
      setCookies(LOGIN_STATUS, true);
      return { ...state, isLoggedIn: true };
    case actions.LOG_OUT:
      setCookies(LOGIN_STATUS, false);
      return { ...state, isLoggedIn: false };
    default:
      return { ...state, isLoggedIn: getCookies(LOGIN_STATUS) };
  }
};

export default GlobalReducer;
