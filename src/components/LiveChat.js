import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    dispatch(
      addMessage({
        name: "Bhavya",
        message: message,
      })
    );
  };
  const handleMessageSubmitOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Bhavya",
        message: message,
      })
    );
    setMessage("");
  };
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Call");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage().slice(0, 30),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full ml-2 h-[515px] border-2 border-black p-2 bg-gray-200 rounded-lg overflow-scroll">
        LiveChat
        <div className=" w-full h-[470px] bg-gray-200 rounded-lg overflow-scroll flex flex-col-reverse">
          <div className="mt-4">
            {chatMessages.map((chat) => {
              return <ChatMessage name={chat.name} message={chat.message} />;
            })}
          </div>
        </div>
      </div>
      <form onSubmit={(e) => handleMessageSubmitOnSubmit(e)}>
        <input
          placeholder="Enter Message"
          className="border-2 border-black ml-2 mt-2 p-0.5 pl-2 rounded-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ml-4 border-2 border-green-50 bg-green-700 text-white p-1 pl-2 pr-2 rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
