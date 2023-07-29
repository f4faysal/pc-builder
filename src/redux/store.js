import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/product/productSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
     user: userReducer,
     products: productsReducer,
  },
})


export default store;