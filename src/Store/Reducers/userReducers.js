import * as actions from "../Actions/ActionTypes";

const userReducers = (state, action) => {
  console.info(action, state);
  switch (action.type) {
    case actions.LOG_IN:
      return { ...state, user: action.payload, isLoggedIn: true };
    case actions.LOG_IN_ERR:
      return { ...state, loginInError: action.payload, isLoggedIn: false };
    default:
      return { ...state };
  }
};

export default userReducers;
