import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
     name: "user",
     initialState: {
          user: null,
          selectedImage: null,
     },
     reducers: {
          login: (state, action) => {
               state.user = action.payload;
          },
          logout: (state) => {
               state.user = null;
          },
          selectedImage: (state, action) => {
               state.selectedImage = action.payload;
          },
          resetImage: (state) => {
               state.selectedImage = null;
          },
     },
});

export const { login, logout, selectedImage, resetImage } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSelectedImage = (state) => state.user.selectedImage;

export default userSlice.reducer;