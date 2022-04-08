import { LOGIN_STATUS } from "../../Utilities/Cookies/Constants";
import getCookies from "../../Utilities/Cookies/getCookies";
import setCookies from "../../Utilities/Cookies/setCookies";
import * as actions from "../Actions/ActionTypes";

const INITIAL_STATE = {
  isLoggedIn: getCookies(LOGIN_STATUS) || false,
};

const dummyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      setCookies(LOGIN_STATUS, true);
      return { ...state, isLoggedIn: true };
    case actions.LOG_OUT:
      setCookies(LOGIN_STATUS, false);
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default dummyReducer;
