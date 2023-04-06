import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Selamat datang di Website STEI-K! Saya adalah chatbot yang akan membantu Anda dalam menemukan informasi mengenai STEI-K. Ada yang bisa saya bantu?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMataKuliah = () => {
    const botMessage = createChatBotMessage(
      "Berikut hal-hal terkait mata kuliah di STEI-K"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSosialMedia = () => {
    const botMessage = createChatBotMessage(
      "Berikut hal-hal terkait sosial media di STEI-K"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLinkAkademik = () => {
    const botMessage = createChatBotMessage(
      "Berikut hal-hal terkait link akademik di STEI-K"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleJadwalUAS = () => {
    const botMessage = createChatBotMessage(
      "Berikut hal-hal terkait jadwal UAS di STEI-K"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTugasBesar = () => {
    const botMessage = createChatBotMessage(
      "Berikut hal-hal terkait tugas besar di STEI-K"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleMataKuliah,
            handleSosialMedia,
            handleLinkAkademik,
            handleTugasBesar,
            handleJadwalUAS,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
