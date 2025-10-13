import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallerySlice";

export const store = configureStore({
  reducer: {
    gallery: gallerySlice.reducer
  }
})

export const galleryActions = gallerySlice.actions


