// AnimatedText.js
import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text, interval, onComplete }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval, onComplete]);

  return <p className="glow-text">{displayText}</p>;
};

export default AnimatedText;
