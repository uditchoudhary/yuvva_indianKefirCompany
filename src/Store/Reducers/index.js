import { combineReducers } from "redux";
import productReducers from "./productReducers";
import userReducers from "./userReducers.js";
import cartReducer from "./cartReducer";

export default combineReducers({
  productState: productReducers,
  userState: userReducers,
  cartState: cartReducer,
});
