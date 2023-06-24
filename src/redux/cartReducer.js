import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartProduct = state.cartProducts.find((element) => element.id === action.payload.id);

      if (cartProduct) {
        cartProduct.quantity += action.payload.quantity;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    removeCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter((element) => element.id !== action.payload);
    },
    cartProductIncrement: (state, action) => {
      state.cartProducts.find((element) => element.id === action.payload).quantity += 1;
    },
    cartProductDecrement: (state, action) => {
      if (state.cartProducts.find((element) => element.id === action.payload).quantity > 1) {
        state.cartProducts.find((element) => element.id === action.payload).quantity -= 1;
      }
    },
    resetCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeCartProduct, resetCart, cartProductIncrement, cartProductDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
