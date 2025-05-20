import "./App.css";
import AudioPlayer from "./AudioPlayer";

import React, { useState, useEffect } from "react";

const fonts = [
  "'Press Start 2P', system-ui",
  "'Boldonse', system-ui",
  "'Markazi Text', serif",
  "'Exile', system-ui",
  "'Times New Roman', Times, serif",
  "'Pinyon Script', cursive",
  "'Limelight', sans-serif",
];

function App() {
  const [fontIndex, setFontIndex] = useState(0);
  const [bpm, setBpm] = useState(100);

  const intervalDelay = 60000 / bpm;

  useEffect(() => {
    setFontIndex(0);
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [bpm, intervalDelay]);

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a1931",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: fonts[fontIndex],
          color: "#fff",
          fontSize: "4rem",
          transition: "font-family 0.2s",
        }}
      >
        BluJim
      </h1>
      <AudioPlayer onBpmChange={setBpm} />
    </div>
  );
}

export default App;
