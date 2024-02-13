import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarSlice,
    cacheSearch: searchSlice,
  },
});

export default store;
