import { combineReducers } from "redux";
import productReducers from "./productReducers";
import userReducers from "./userReducers.js";

export default combineReducers({
  productState: productReducers,
  userState: userReducers,
});
