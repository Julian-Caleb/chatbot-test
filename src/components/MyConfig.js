// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   initialMessages: [createChatBotMessage(`Hello there! How can I help you?`)],
// };

import "./chatbot.css";
import { createChatBotMessage, header, botAvatar } from "react-chatbot-kit";
import React from "react";

const config = {
  initialMessages: [createChatBotMessage(`Hello there! How can I help you?`)],
  customComponents: {
    header: () => <div className="chatbot-header">STEI-K BOT</div>,
    botAvatar: () => (
      <img
        className="chatbot-img"
        src={require("../images/bot_icon.png")}
        alt="bot icon"
      />
    ),
  },
};

export default config;
