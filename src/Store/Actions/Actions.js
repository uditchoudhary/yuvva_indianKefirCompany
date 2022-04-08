import * as actiontypes from "./ActionTypes";

const LogInOut = (loginStatus) => {
  if (loginStatus) {
    return { type: actiontypes.LOG_IN };
  } else {
    return { type: actiontypes.LOG_OUT };
  }
};

export default LogInOut;
