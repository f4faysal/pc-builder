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
               state.addtoBuild = action.payload;
               state.isLoading = false;
               state.error = null;
          },
     },
});

export const {
     addtoBuild,
} = addtoBuildSlice.actions;

export default addtoBuildSlice.reducer;






