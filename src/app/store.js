import { configureStore } from "@reduxjs/toolkit";
import { playerInfoSlice } from "./forum/playerSlicer";

export const store = configureStore({
  reducer: playerInfoSlice.reducer
});