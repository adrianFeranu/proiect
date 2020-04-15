import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div class="container">
        <p>{text} Echo </p>
      </div>
      <div className="suggestions">
        <button
          onClick={() => {
            setText("Lorem Ipsum is simply");

            // TODO: set the text to "Hi"
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            setText("hey");
            // TODO: set the text to "Hey"
          }}
        >
          Hey
        </button>
        <button
          onClick={() => {
            // TODO: set the text to "nvm"
          }}
        >
          nvm
        </button>
      </div>
    </div>
  );
}
