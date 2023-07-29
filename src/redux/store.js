import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/product/productSlice';
import productsCatagoryReducer from './features/productCatagory/productCatagorySlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
     user: userReducer,
     products: productsReducer,
     productsCatagory: productsCatagoryReducer,
  },
})


export default store;