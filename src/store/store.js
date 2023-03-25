import { configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkit";
import imageSlice from "./img";

export default configureStore({
  reducer: {
    facts: toolkitReducer,
    images: imageSlice,
  },
});