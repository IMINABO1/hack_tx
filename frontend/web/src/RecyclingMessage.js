// RecyclingMessage.js
import React, { useState, useRef, useEffect } from 'react';
import AnimatedText from './AnimatedText';

const RecyclingMessage = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const messageRef = useRef(null); // Create a reference for scrolling

  // Full message as a single string with line breaks
  const message = `Recycling is a small act with a big impact!
But knowing what can be recycled isn’t always simple.
That’s where our tool comes in! Using live image recognition, it identifies different types of trash and tells you if it’s recyclable.
With this guidance, you’re empowered to make better choices for the environment. Try it out, and take a step towards a greener, healthier world!`;

  // Scroll to the end when animation is complete
  useEffect(() => {
    if (!isAnimating && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isAnimating]);

  return (
    <div className="recycling-message">
      {isAnimating ? (
        <AnimatedText 
          text={message} 
          interval={70} // Adjust speed as necessary
          onComplete={() => setIsAnimating(false)} 
        />
      ) : (
        <div>
          <span className="glow-text" ref={messageRef}>{message}</span> {/* Attach ref to the static message */}
          {/* Button that appears after the message is fully displayed */}
          <a href="/street/" className="action-button">Dispose Trash!</a>
        </div>
      )}
    </div>
  );
};

export default RecyclingMessage;
