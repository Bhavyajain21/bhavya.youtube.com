import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import VideoContainer from "./components/VideoContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import VideoWatch from "./components/VideoWatch";
import Suggestions from "./components/Suggestions";
import SearchDataPage from "./components/SearchDataPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="flex ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;
