import React, { useState } from 'react';
import RecyclingMessage from './RecyclingMessage';
import Developer from './Developer';
import './App.css';

const catchphrases = [
  "Turn Trash into Treasure!",
  "Reduce, Reuse, Recycle – It’s the Right Thing to Do!",
  "Join the Green Revolution!",
  "One Small Act for You, One Giant Leap for Earth!",
  "Clean Up Today for a Greener Tomorrow!",
  "Be a Recycling Hero – Save Our Planet!",
  "Waste Less, Live More!",
  "Recycle Right – Brighten Our Future!",
  "Don’t Trash It, Cash It – Recycle!",
  "Recycling: The Power of Your Choice!",
];

// Function to get a random catchphrase
const getRandomCatchphrase = () => {
  const randomIndex = Math.floor(Math.random() * catchphrases.length);
  return catchphrases[randomIndex];
};

const App = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  console.log(isAnimationComplete);
  const developers = [
    {
      name: 'Joseph Oduyebo', 
      role: 'Fullstack Developer',
      image: "https://raw.githubusercontent.com/IMINABO1/hack_tx/refs/heads/main/frontend/web/public/joseph.png"
    },
    {
      name: 'Iminabo Roberts', 
      role: 'Fullstack Developer',
      image: 'https://raw.githubusercontent.com/IMINABO1/hack_tx/refs/heads/main/frontend/web/public/iminabo.avif'
    },
    {
      name: 'Daniel Enesi', 
      role: 'Fullstack Developer',
      image: 'https://raw.githubusercontent.com/IMINABO1/hack_tx/refs/heads/main/frontend/web/public/daniel.avif'
    }
  ];

  return (
    <div className="App">
      {/* Display a random catchphrase */}
      <h2 className="catchphrase">{getRandomCatchphrase()}</h2>

      {/* Start Recycling Button */}
      <a href="/street/" className="action-button">Start Recycling!</a>

      {/* Meet the Team Section */}
      <section className="developer-section">
        <h2>Meet Our Team</h2>
        <div className="developer-cards">
          {developers.map((dev, index) => (
            <Developer key={index} name={dev.name} role={dev.role} image={dev.image} />
          ))}
        </div>
      </section>

      {/* Hello, Recycler! Title */}
      <h1 className="title">Hello, Recycler!</h1>

      {/* Recycling Message Component */}
      <RecyclingMessage onComplete={() => setIsAnimationComplete(true)} />
    </div>
  );
};

export default App;
