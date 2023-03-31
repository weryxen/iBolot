import { configureStore } from "@reduxjs/toolkit";
import userRegReducer from "./Slices/userRegSlice";

export const store = configureStore({
  reducer: {
    userRegReducer,
  },
});
