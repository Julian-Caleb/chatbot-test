import React from "react";

import { createChatBotMessage } from "react-chatbot-kit";

import Quiz from "./widgets/Quiz";
import Options from "./widgets/Options";

import "./chatbot.css";

const config = {
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

  botName: "STEI-K Bot",

  initialMessages: [
    createChatBotMessage(
      `Hai! Aku STEI-K bot, sebuah chatbot yang akan membantu mengetahui lebih banyak lagi mengenai STEI-K.`
    ),
    createChatBotMessage(`Apa yang ingin kamu ketahui?`, { widget: "options" }),
  ],

  state: {
    gist: "",
    infoBox: "",
  },

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
