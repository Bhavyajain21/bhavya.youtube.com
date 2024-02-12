import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import VideoContainer from "./components/VideoContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import SearchDataPage from "./components/SearchDataPage";
import VideoWatch from "./components/VideoWatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/watch",
        element: <VideoWatch />,
      },
      {
        path: "/results",
        element: <SearchDataPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
