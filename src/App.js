import React, { useState, useEffect, createContext } from "react";
import Chatbot from "react-chatbot-kit";

import "./components/chatbot.css";
import "react-chatbot-kit/build/main.css";

import config from "./components/MyConfig";
import MessageParser from "./components/MyMessageParser";
import ActionProvider from "./components/MyActionProvider";
import SampleDocument from "./components/SampleDocument";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <SampleDocument />
      <button className="chatbot-button" onClick={toggleChatbot}>
        <img
          className="chatbot-img-button"
          src={require("./images/bot_icon.png")}
          alt="bot icon"
        />
      </button>
      <div className={`chatbot-container ${isVisible ? "show" : "hide"}`}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          floating={true}
        />
      </div>
    </div>
  );
}

export default App;
