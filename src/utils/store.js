import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarSlice,
    cacheSearch: searchSlice,
    chat: chatSlice,
  },
});

export default store;
