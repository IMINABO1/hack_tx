import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text, interval, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isSuckedBack, setIsSuckedBack] = useState(false);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1)); // Use slice to append one character at a time
        index++;
      } else {
        clearInterval(intervalId); // Clear the interval once the text is fully displayed
        
        // Set a timeout to trigger the suck-back effect after a delay
        setTimeout(() => {
          setIsSuckedBack(true); // Start suck-back effect
          if (onComplete) onComplete(); // Call onComplete to signal the next text
        }, 1000); // Adjust the delay time as needed (1 second here)
      }
    }, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text, interval, onComplete]);

  return (
    <span className={`glow-text ${isSuckedBack ? 'sucked-back' : ''}`}>
      {displayText}
    </span>
  );
};

export default AnimatedText;
