import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebarToggle",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
