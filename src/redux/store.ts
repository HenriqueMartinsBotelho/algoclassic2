import { configureStore } from "@reduxjs/toolkit";
import btnReducer from "./btnSlice";
import dataScructureReducer from "./dataStructureSlice";

const store = configureStore({
  reducer: {
    btnState: btnReducer,
    dataScructureState: dataScructureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectBtn = (state: RootState) => state.btnState;
export const selectdataScructure = (state: RootState) =>
  state.dataScructureState;
export default store;
