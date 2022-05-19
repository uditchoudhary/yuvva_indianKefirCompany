import { combineReducers } from "redux";
import productReducers from "./productReducers";
import GlobalReducer from "./GlobalReducer";

export default combineReducers({
  productReducers,
  GlobalReducer,
});
