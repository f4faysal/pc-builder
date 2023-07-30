import { configureStore } from '@reduxjs/toolkit';
import addtoBuildReducer from './features/addtoBuild/addtoBuildSlice';
import productsReducer from './features/product/productSlice';
import productsCatagoryReducer from './features/productCatagory/productCatagorySlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
     user: userReducer,
     products: productsReducer,
     productsCatagory: productsCatagoryReducer,
     addtoBuild: addtoBuildReducer,
     
  },
})


export default store;