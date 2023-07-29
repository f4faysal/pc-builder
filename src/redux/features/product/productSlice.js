import { createSlice } from "@reduxjs/toolkit";
const productsSlice = createSlice({
     name: 'products',
     initialState: {
          products: [],
          isLoading: false,
          error: null,
     },
     reducers: {
          getProductsSuccess: (state, action) => {
               state.products = action.payload;
               state.isLoading = false;
               state.error = null;
          },
          getProductsStart: (state) => {
               state.isLoading = true;
               state.error = null;
          },
          getProductsFailure: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
     },
});

export const {
     getProductsStart,
     getProductsSuccess,
     getProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;






