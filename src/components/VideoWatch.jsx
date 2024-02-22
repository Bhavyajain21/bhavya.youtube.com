import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utils/sidebarSlice";
import Comments from "./Comments";
import { comments } from "../constants";
import LiveChat from "./LiveChat";

const VideoWatch = () => {
  const [params] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-2 m-2">
        <iframe
          className="w-[70%]"
          height="515"
          src={`https://www.youtube.com/embed/${params.get(
            "v"
          )}?si=0sc93DjBhy0BFGXi`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <div className="w-[30%]">
          <LiveChat />
        </div>
      </div>
      <div className="ml-5">
        <h1 className="mt-4 font-bold text-2xl">Comments:</h1>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default VideoWatch;
