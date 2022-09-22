import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import spaceReducer from "./space/slice";
import storyReducer from "./story/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    space: spaceReducer,
    story: storyReducer,
  },
});