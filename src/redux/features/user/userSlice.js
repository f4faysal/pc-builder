import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
     name: 'user ',
     initialState: {
          user: {
               email: null,
          }
     },
     reducers: {
          setUser: (state, action) => {
               state.user.email = action.payload;
          },

     },

});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;