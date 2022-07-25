import { configureStore } from "@reduxjs/toolkit";
import btnReducer from "./btnSlice";

const store = configureStore({
  reducer: {
    btnState: btnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectBtn = (state: RootState) => state.btnState;
export default store;
