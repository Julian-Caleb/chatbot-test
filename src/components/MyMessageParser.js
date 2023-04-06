// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message) {
//     console.log(message);
//   }
// }

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("help")) {
      this.actionProvider.help();
    } else if (lowerCaseMessage.includes("bye")) {
      this.actionProvider.bye();
    } else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;
