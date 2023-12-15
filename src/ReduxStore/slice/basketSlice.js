import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketProducts: [],
  itemCount: 0,
  totalAmount: 0,
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    ADD_TO_BASKET: (state, action) => {
      //SEPETE EKLEME
      const addedProduct = { ...action.payload, quantity: 1 };
      //Sepeti kontrol et
      const isInCart = state.basketProducts.find(
        (item) => item.id === action.payload.id
      );
      if (isInCart) {
        //sepette varsa miktarını arttır
        isInCart.quantity += 1;
      } else {
        //sepette yoksa diziye ekle
        state.basketProducts.push(addedProduct);
      }
      //SEPET Quantity GÜNCELLEME
      state.itemCount = state.basketProducts.reduce(
        (total, item) => total + item.quantity,
        0
      );
      //Total Amount Belirleme
      state.totalAmount = state.basketProducts.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    CLEAR_ALL_BASKET: (state) => {
      state.basketProducts = [];
      state.itemCount = 0;
      state.totalAmount = 0;
    },
    DELETE_FROM_BASKET: (state, action) => {
      const isInCart = state.basketProducts.find(
        (item) => item.id === action.payload.id
      );
      //Miktar>1
      if (isInCart && isInCart.quantity > 1) {
        isInCart.quantity -= 1;
      } else {
        // Miktar=1
        state.basketProducts = state.basketProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } //SEPET Quantity GÜNCELLEME
      state.itemCount = state.basketProducts.reduce(
        (total, item) => total + item.quantity,
        0
      );
      //Total Amount Belirleme
      state.totalAmount = state.basketProducts.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },
});

export const { ADD_TO_BASKET, CLEAR_ALL_BASKET, DELETE_FROM_BASKET } =
  basketSlice.actions;
export default basketSlice.reducer;
