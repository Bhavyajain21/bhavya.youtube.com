import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=` + video.id}>
          <VideoCard key={video.id} video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;