import React, { useState } from 'react';
import AnimatedText from './AnimatedText'; // Adjust the path if necessary

const RecyclingMessage = () => {
  const [step, setStep] = useState(0);

  const messages = [
    "Recycling is a small act with a big impact! When you recycle, you reduce waste, save resources, and help keep the planet clean.",
    "But knowing what can be recycled isn’t always simple.",
    "That’s where our tool comes in! Using live image recognition, it identifies different types of trash and tells you if it’s recyclable.",
    "With this guidance, you’re empowered to make better choices for the environment. Try it out, and take a step towards a greener, healthier world!"
  ];

  const intervals = [200, 150, 100, 50]; // Intervals for each message

  return (
    <div className="recycling-message">
      {step < messages.length && (
        <AnimatedText 
          text={messages[step]} 
          interval={intervals[step]} 
          onComplete={() => setStep(step + 1)} // Move to the next message after completion
        />
      )}
    </div>
  );
};

export default RecyclingMessage;
