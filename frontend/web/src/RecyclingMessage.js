// RecyclingMessage.js
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';

const RecyclingMessage = () => {
  const [step, setStep] = useState(0);

  const messages = [
    "Recycling is a small act with a big impact!",
    "But knowing what can be recycled isn’t always simple.",
    "That’s where our tool comes in! Using live image recognition, it identifies different types of trash and tells you if it’s recyclable.",
    "With this guidance, you’re empowered to make better choices for the environment. Try it out, and take a step towards a greener, healthier world!"
  ];

  const intervals = [180, 140, 100, 60];

  return (
    <div className="recycling-message">
      {/* Only render the current message based on `step` */}
      {step < messages.length && (
        <AnimatedText 
          text={messages[step]} 
          interval={intervals[step]} 
          onComplete={() => setStep(step + 1)} 
        />
      )}
    </div>
  );
};

export default RecyclingMessage;
