import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utils/sidebarSlice";
const VideoWatch = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  console.log(params.get("v"));
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="p-2 m-2">
      <iframe
        width="960"
        height="515"
        src={`https://www.youtube.com/embed/${params.get(
          "v"
        )}?si=0sc93DjBhy0BFGXi`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  );
};

export default VideoWatch;
