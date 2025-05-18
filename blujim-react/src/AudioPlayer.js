import React, { useEffect, useRef, useState } from "react";

const tracks = [
  {
    name: "Animal",
    src: process.env.PUBLIC_URL + "/music/animal.mp3",
    bpm: 79,
  },
  {
    name: "Comète",
    src: process.env.PUBLIC_URL + "/music/comet.mp3",
    bpm: 93,
  },
  {
    name: "Pourquoi",
    src: process.env.PUBLIC_URL + "/music/pourquoi.mp3",
    bpm: 143,
  },
];

function AudioPlayer({ onBpmChange }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    const randIdx = Math.floor(Math.random() * tracks.length);
    setIndex(randIdx);
    // Pas de lecture auto
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [index, playing]);

  // >> Ajout pour transmettre le bpm <<
  useEffect(() => {
    if (onBpmChange && typeof onBpmChange === "function") {
      onBpmChange(tracks[index].bpm);
    }
  }, [index, onBpmChange]);

  const nextTrack = () => {
    setIndex((prev) => (prev + 1) % tracks.length);
    setPlaying(false);
  };
  const prevTrack = () => {
    setIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setPlaying(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 20,
        bottom: 20,
        background: "rgba(30,30,30,0.85)",
        padding: 15,
        borderRadius: 10,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 4px 24px rgba(0,0,0,.14)",
      }}
    >
      <button onClick={prevTrack}>⏮️</button>
      <button onClick={() => setPlaying((prev) => !prev)}>
        {playing ? "⏸️" : "▶️"}
      </button>
      <button onClick={nextTrack}>⏭️</button>
      <span style={{ margin: "0 12px" }}>{tracks[index].name}</span>
      <audio ref={audioRef} src={tracks[index].src} onEnded={nextTrack} />
    </div>
  );
}

export default AudioPlayer;
