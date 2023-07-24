import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/cart_action";

const { read_cart } = actions;

const initialState = {
  cartItem: []
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(read_cart.fulfilled, (state, action) => {
    return {
      ...state,
      cartItem: action.payload.cartItem
    };
  });
});

export default reducer;