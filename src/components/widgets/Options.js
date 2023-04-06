import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Mata Kuliah",
      handler: props.actionProvider.handleMataKuliah,
      id: 1,
    },
    {
      text: "Sosial Media",
      handler: props.actionProvider.handleSosialMedia,
      id: 2,
    },
    {
      text: "Link Akademik",
      handler: props.actionProvider.handleLinkAkademik,
      id: 3,
    },
    {
      text: "Jadwal UAS",
      handler: props.actionProvider.handleJadwalUAS,
      id: 4,
    },
    {
      text: "Informasi Tugas Besar",
      handler: props.actionProvider.handleTugasBesar,
      id: 5,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
