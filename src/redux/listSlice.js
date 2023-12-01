import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let id = 1;

export const listReducer = createSlice({
  name: "list",
  initialState,
  reducers: {
    addElement: (state, action) => {
      const { text } = action.payload;
      const newElement = {
        text,
        disable: false,
        id: id,
      };
      id++;
      state.push(newElement);
    },
    deleteElement: (state, action) => {
      const { id } = action.payload;
      return state.filter(element => element.id !== id)
    },
    changeDisble: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((a) => a.id === id);
      state[index].disable = true;
    },
  },
});

export const { addElement, deleteElement, changeDisble } = listReducer.actions;
export default listReducer.reducer;
