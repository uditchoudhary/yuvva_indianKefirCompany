import { combineReducers } from "redux";
import ProductReducers from "./ProductReducers.js";
import UserReducers from "./UserReducers.js";
import CartReducer from "./CartReducer.js";
import OrdersReducer from "./OrdersReducer.js";

export default combineReducers({
  productState: ProductReducers,
  userState: UserReducers,
  cartState: CartReducer,
  orderState: OrdersReducer,
});
