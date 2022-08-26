// External Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Internal Dependencies
import homeReducer from "../reducers/homeReducer";

const store = configureStore({
  reducer: {
    homes: homeReducer,
  },
});

export default store;
