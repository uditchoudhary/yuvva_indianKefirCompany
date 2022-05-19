import * as actions from "../Actions/ActionTypes";

const productReducers = (state, action) => {
  console.info(action, state);
  switch (action.type) {
    case actions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return { ...state };
  }
};

export default productReducers;
