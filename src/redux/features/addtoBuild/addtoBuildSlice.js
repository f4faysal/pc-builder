import { createSlice } from "@reduxjs/toolkit";
const addtoBuildSlice = createSlice({
     name: 'products',
     initialState: {
          addtoBuild: [],
          isLoading: true,
          error: null,
     },
     reducers: {
          addtoBuild: (state, action) => {

               const existiong = state.addtoBuild.find(prodact => prodact.category === action.payload.category)

               if (existiong) {
               } else {
                    state.addtoBuild.push({ ...action.payload })
               }
               // state.addtoBuild = action.payload;
               // state.isLoading = false;
               // state.error = null;
          },
     },
});

export const {
     addtoBuild,
} = addtoBuildSlice.actions;

export default addtoBuildSlice.reducer;






