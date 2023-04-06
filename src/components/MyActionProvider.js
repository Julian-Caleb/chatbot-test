// class ActionProvider {
//   constructor(
//     createChatBotMessage,
//     setStateFunc,
//     createClientMessage,
//     stateRef,
//     createCustomMessage,
//     ...rest
//   ) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//     this.stateRef = stateRef;
//     this.createCustomMessage = createCustomMessage;
//   }
// }

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello there!");
    this.addMessageToState(message);
  }

  help() {
    const message = this.createChatBotMessage("How can I help you?");
    this.addMessageToState(message);
  }

  bye() {
    const message = this.createChatBotMessage("Goodbye!");
    this.addMessageToState(message);
  }

  unknown() {
    const message = this.createChatBotMessage("Sorry, I didn't understand.");
    this.addMessageToState(message);
  }

  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
