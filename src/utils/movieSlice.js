import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowplaying: null,
    popular: null,
    toprated: null,
    upcoming: null,
    trailervideo: null,
  },
  reducers: {
    addNowPlayingLists: (state, action) => {
      state.nowplaying = action.payload;
    },
    addPopularLists: (state, action) => {
      state.popular = action.payload;
    },
    addTopRatedLists: (state, action) => {
      state.toprated = action.payload;
    },
    addUpcomingLists: (state, action) => {
      state.upcoming = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailervideo = action.payload;
    },
  },
});
export const {
  addNowPlayingLists,
  addPopularLists,
  addTopRatedLists,
  addUpcomingLists,
  addTrailerVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
