import React from "react";
import { CgProfile } from "react-icons/cg";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center mt-4">
      <div className="profile text-xl font-bold">
        <CgProfile />
      </div>
      <span className="ml-2 font-bold text-base">{name}</span>
      <span className="ml-2 font-normal text-base">{message}</span>
    </div>
  );
};

export default ChatMessage;
