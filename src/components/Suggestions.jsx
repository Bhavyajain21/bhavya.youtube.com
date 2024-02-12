import React from "react";
import { CiSearch } from "react-icons/ci";

const Suggestions = ({ suggestions, setSearchQuery }) => {
  return (
    <div className="block absolute z-40 w-[471px] bg-[#f7f7f7] rounded-lg  mt-[0.5px]">
      {suggestions.map((suggestion) => {
        return (
          <div
            key={suggestion}
            className="hover:bg-gray-300 cursor-pointer rounded-lg"
            onMouseDown={() => setSearchQuery(suggestion)}>
            <span className="flex items-center p-2">
              <CiSearch className="text-lg" />{" "}
              <span className="ml-3">{suggestion}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
