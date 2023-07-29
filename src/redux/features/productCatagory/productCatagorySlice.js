import { createSlice } from "@reduxjs/toolkit";
const productCatagorySlice = createSlice({
     name: 'products',
     initialState: {
          products: [],
          isLoading: true,
          error: null,
     },
     reducers: {
          getProductsCatagoriSuccess: (state, action) => {
               state.products = action.payload;
               state.isLoading = false;
               state.error = null;
          },
        
         
     },
});

export const {
     getProductsCatagoriSuccess,
} = productCatagorySlice.actions;

export default productCatagorySlice.reducer;






