import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  space: {},
  stories: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.space = action.payload.space;
      state.stories = action.payload.space.stories;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.space = null;
      state.stories = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.space = action.payload.space;
      state.stories = action.payload.space.stories;
    },
    addStory: (state, action) => {
      state.stories = [...state.space.stories, action.payload]
    },
    removeStory: (state, action) => {
        state.stories = state.stories.filter(story => story.id !== action.payload)
    }
  },
});

export const { loginSuccess, logOut, tokenStillValid, addStory, removeStory } = userSlice.actions;

export default userSlice.reducer;