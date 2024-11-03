// RecyclingMessage.js
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';

const RecyclingMessage = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  // Full message as a single string with line breaks
  const message = `Recycling is a small act with a big impact!
But knowing what can be recycled isn’t always simple.
That’s where our tool comes in! Using live image recognition, it identifies different types of trash and tells you if it’s recyclable.
With this guidance, you’re empowered to make better choices for the environment. Try it out, and take a step towards a greener, healthier world!`;

  return (
    <div className="recycling-message">
      {isAnimating ? (
        <AnimatedText 
          text={message} 
          interval={70} // Adjust speed as necessary
          onComplete={() => setIsAnimating(false)} 
        />
      ) : (
        <span className="glow-text">{message}</span> // Static message after it's displayed
      )}
    </div>
  );
};

export default RecyclingMessage;
