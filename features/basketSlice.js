import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      state.items = [...state.items, actions.payload];
    },
    removeToBasket: (state, actions) => {
      const index = state.items.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeToBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket?.items;
export const selectBasketWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket?.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
