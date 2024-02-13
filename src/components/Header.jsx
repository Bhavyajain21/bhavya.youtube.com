import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import { YOUTUBE_SUGGESTIONS_API } from "../constants";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { addToCache } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  // Concept of Debouncing - Why did I do this?

  // To not call api on every key press, instead we can get the difference between key press and if it is fast we can decline the api call, and hence it will optimize the performance
  const getCachedData = useSelector((store) => store.cacheSearch);
  console.log(getCachedData);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    // caching implementation using redux store
    if (getCachedData[searchQuery]) {
      return getCachedData[searchQuery];
    }

    const res = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(addToCache({ [searchQuery]: data[1] }));
  };

  return (
    <div className="header sticky top-0 bg-white flex p-4 items-center">
      <div className="grow-[0] text-2xl cursor-pointer" onClick={handleToggle}>
        <GiHamburgerMenu />
      </div>
      <Link className="ml-6 grow-[0.6]" to="/">
        <div className="logo">YOUTUBE</div>
      </Link>
      <div className="searchBox grow-[3] items-center">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
            className="border-2 border-solid flex border-black w-1/2 rounded-l-xl outline-0 pl-3 pt-1 pb-1"
          />
          <span>
            <Link to={`results?search=` + searchQuery}>
              <CiSearch className="pt-1 pb-1 flex border-2 border-solid border-black border-l-0 size-9 rounded-r-xl w-10 cursor-pointer" />
            </Link>
          </span>
        </div>

        {showSuggestions && (
          <Suggestions
            setSearchQuery={setSearchQuery}
            suggestions={suggestions}
          />
        )}
      </div>
      <div className="profile grow-[0.25] text-3xl font-bold">
        <CgProfile />
      </div>
    </div>
  );
};

export default Header;
