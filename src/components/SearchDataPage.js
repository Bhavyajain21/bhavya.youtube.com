import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../constants";
import { Link } from "react-router-dom";

const SearchDataPage = () => {
  const [search_query] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchResults();
  }, [search_query]);

  const getSearchResults = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API(search_query.get("search")));
    const data = await res.json();
    console.log(data);
    setSearchResults(data.items);
  };

  return (
    <div>
      {searchResults.map((result) => {
        console.log();
        return (
          <Link to={`/watch?v=${result.id.videoId}`}>
            <div className="flex cursor-pointer p-2 m-2 ">
              <div className="img">
                <img
                  className="rounded-lg"
                  src={result.snippet.thumbnails.medium.url}
                />
              </div>
              <div className="desc ml-4 flex flex-col">
                <div className="title text-md">{result.snippet.title}</div>
                <div className="channel font-bold grow-[0.5] ">
                  {result.snippet.channelTitle}
                </div>
                <div className="description text-sm text-[#292929]">
                  {result.snippet.description}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchDataPage;
