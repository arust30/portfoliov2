import React, { useState, useEffect } from "react";
import "./hero.css";

function TerminalHero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const code = [
    "run portfolio_website.exe->Loading scripts...->Loading styles...->Loading junk...->Finished!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < code.length) {
        const charToAdd = code[index][text.length];

        if (charToAdd === "-") {
          setText((text) => text + "\n");
        } else {
          setText((text) => text + charToAdd);
        }

        if (text.length === code[index].length) {
          setIndex((index) => index + 1);
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [code, index, text]);

  return (
    <div className="bg-gray-900 text-green-400 py-16 px-8 flex justify-center items-center">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-button terminal-button-red"></span>
          <span className="terminal-button terminal-button-yellow"></span>
          <span className="terminal-button terminal-button-green"></span>
        </div>
        <div className="terminal-body">
          <pre className="terminal-text text-left">{text}</pre>
        </div>
      </div>
    </div>
  );
}

export default TerminalHero;
