import { combineReducers } from "redux";
import productReducers from "./productReducers";
import GlobalReducer from "./GlobalReducer";
import userReducers from "./userReducers";

export default combineReducers({
  productReducers,
  GlobalReducer,
  // userReducers,
});
