import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptpage: false,
    gptmovies: [],
    showgptmovie: false,
  },
  reducers: {
    gptpagechange: (state, action) => {
      state.showgptpage = action.payload;
    },
    addgptmovie: (state, action) => {
      state.gptmovies.push(action.payload);
    },
    showgptmovie: (state, action) => {
      state.showgptmovie = true;
    },
  },
});
export default GPTSlice.reducer;
export const { gptpagechange, addgptmovie, showgptmovie } = GPTSlice.actions;
