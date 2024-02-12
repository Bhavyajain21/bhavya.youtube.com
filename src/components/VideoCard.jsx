import React from "react";

const VideoCard = ({ video }) => {
  const thumbnailUrl = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const views = video.statistics.viewCount;
  return (
    <div className="w-[300px] shadow-lg rounded-lg p-2 m-2 cursor-pointer">
      <img src={thumbnailUrl} alt="" />
      <h1 className="font-bold">{title}</h1>
      <div className="mt-3">{channelTitle}</div>
      <div className="views">{views} views</div>
    </div>
  );
};

export default VideoCard;
