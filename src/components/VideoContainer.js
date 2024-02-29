import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);

  useEffect(() => {
    if (!pageToken && videos.length == 0) getVideos();
    window.addEventListener("scroll", () => {
      if (
        Math.abs(
          document.documentElement.scrollHeight -
            document.documentElement.scrollTop -
            document.documentElement.clientHeight
        ) <= 1
      ) {
        getExtraVideos();
      }
    });
    return () =>
      window.removeEventListener("scroll", () => {
        if (
          Math.abs(
            document.documentElement.scrollHeight -
              document.documentElement.scrollTop -
              document.documentElement.clientHeight
          ) <= 1
        ) {
          getExtraVideos();
        }
      });
  }, [pageToken]);

  const getExtraVideos = async () => {
    const res1 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&pageToken=${
        !pageToken ? "" : pageToken
      }&key=AIzaSyD5g0lVxsI9gQL_wDhzL1VGUWXU3l4F-YQ`
    );
    const data1 = await res1.json();
    if (!data1.items) {
      setVideos([...videos]);
    } else {
      setVideos([...videos, ...data1.items]);
    }
    if (data1.nextPageToken) setPageToken(data1.nextPageToken);
    else setPageToken(null);
  };

  const getVideos = async () => {
    const res = await fetch(
      YOUTUBE_VIDEOS_API + `&pageToken=${!pageToken ? "" : pageToken}`
    );
    const data = await res.json();
    setVideos(data.items);
    // Warning: Encountered two children with the same key, `couuwMqFtb0`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    if (data.nextPageToken) setPageToken(data.nextPageToken);
  };

  return (
    <div className="flex flex-wrap w-[100%]">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=` + video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
