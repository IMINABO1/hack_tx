// AnimatedText.js
import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text, interval, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isPaused, setIsPaused] = useState(false); // Track if animation is paused

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (!isPaused && index < text.length) {
        setDisplayText(text.slice(0, index + 1)); // Append the next character
        index++;
        window.scrollTo(0, document.body.scrollHeight); // Auto-scroll as text updates
      } else if (index >= text.length) {
        clearInterval(intervalId); // Clear interval when text is fully displayed
        if (onComplete) onComplete(); // Trigger the completion callback
      }
    }, interval);

    // Set up event listener for pausing/playing animation on window click
    const handleWindowClick = () => setIsPaused((prev) => !prev);
    window.addEventListener("click", handleWindowClick);

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
      window.removeEventListener("click", handleWindowClick); // Remove event listener on unmount
    };
  }, [text, interval, onComplete, isPaused]);

  return <span className="glow-text">{displayText}</span>;
};

export default AnimatedText;
