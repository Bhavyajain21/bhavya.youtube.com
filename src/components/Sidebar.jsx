import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const show = useSelector((store) => store.sidebarToggle.isSideBarOpen);

  if (!show) return null;

  return (
    <div className="sidebar divide-y divide-slate-700 w-[300px]">
      <Link to="/">
        <div className="home text-xl flex items-center p-2">
          <IoMdHome />
          <div className="text-lg ml-1">Home</div>
        </div>
      </Link>
      <div className="subsriptions p-2">
        <div className="font-bold pl-1">Subscriptions</div>
        <ul className="cursor-pointer ">
          <li className="p-1">Bhavya Jain</li>
          <li className="p-1">Aman Dhattarwal</li>
          <li className="p-1">Pepcoding</li>
        </ul>
      </div>
      <div className="Explore p-2">
        <div className="font-bold pl-1">Explore </div>
        <ul className="cursor-pointer">
          <li className="p-1">Trending</li>
          <li className="p-1">Shopping</li>
          <li className="p-1">Music</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
