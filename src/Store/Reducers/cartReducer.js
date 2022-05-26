import * as actions from "../Actions/ActionTypes";

const INITIAL_STATE = {
  cartData: undefined,
  cartFetchLoading: false,
  cartFetchFailure: undefined,
  addToCartFailure: false,
  addToCartSuccess: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_CART_DATA:
      return { ...state, cartData: action.payload };
    case actions.CART_FETCH_LOADING:
      return { ...state, cartFetchLoading: action.payload };
    case actions.CART_FETCH_FAILURE:
      return { ...state, cartFetchFailure: action.payload };
    // case actions.ITEM_ADD_CART_FAILED:
    //   return { ...state, addToCartFailure: action.payload };
    // case actions.ITEM_ADD_CART_SUCCESS:
    //   return { ...state, addToCartSuccess: action.payload };
    default:
      return { ...state };
  }
};

export default cartReducer;
