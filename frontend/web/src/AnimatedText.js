// AnimatedText.js
import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text, interval, onComplete }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index+1)); // Append the next character
        index++;
      } else {
        clearInterval(intervalId); // Clear the interval once the text is fully displayed
        if (onComplete) onComplete(); // Trigger the completion callback
      }
      window.scrollTo(0,document.body.scrollHeight);
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval, onComplete]);

  return <span className="glow-text">{displayText}</span>;
};

export default AnimatedText;
