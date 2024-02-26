import React from "react";

const VideoCard = ({ video }) => {
  const thumbnailUrl = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const views = video.statistics.viewCount;
  return (
    <div className="w-[18vw] h-[35vh] shadow-lg rounded-lg p-2 m-2 cursor-pointer overflow-scroll relative">
      <img src={thumbnailUrl} alt="" />
      <h1 className="font-semibold text-sm">{title}</h1>
      <div className="desc-card absolute bottom-0 mb-3">
        <div className="mt-3 text-sm">{channelTitle}</div>
        <div className="views text-sm">{views} views</div>
      </div>
    </div>
  );
};

export default VideoCard;
