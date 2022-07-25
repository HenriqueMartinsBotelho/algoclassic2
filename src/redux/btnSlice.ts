import { createSlice } from "@reduxjs/toolkit";

const initialColors = {
  acessar: false,
  inserir: false,
  deletar: false,
  buscar: false,
};

export const slice = createSlice({
  name: "btn",
  initialState: initialColors,
  reducers: {
    addActiveButton(state, { payload }) {
      return { ...initialColors, [payload]: true };
    },
  },
});

export const { addActiveButton } = slice.actions;
// export const selectBtn = (state) => state.btn;
export default slice.reducer;
