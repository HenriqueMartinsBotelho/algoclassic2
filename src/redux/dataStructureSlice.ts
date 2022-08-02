import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  algorithm: "array",
  selectedOption: "buscar",
};

export const slice = createSlice({
  name: "data",
  initialState: initialValues,
  reducers: {
    addDataScructure(state, { payload }) {
      return {
        ...initialValues,
        algorithm: payload.algorithm,
        selectedOption: payload.selectedOption,
      };
    },
  },
});

export const { addDataScructure } = slice.actions;
// export const selectBtn = (state) => state.btn;
export default slice.reducer;
