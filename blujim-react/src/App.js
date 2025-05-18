// import logo from "./logo.svg";
import "./App.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a1931", // bleu nuit
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
        }}
      >
        BluJim
      </h1>
    </div>
  );
}

export default App;
