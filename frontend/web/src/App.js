import React from 'react';
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
  const developers = [
    {
      name: 'Joseph Oduyebo',
      role: 'Fullstack Developer',
      image: 'path/to/alice.jpg' // Replace with actual image path
    },
    {
      name: 'Iminabo Roberts',
      role: 'Fullstack Developer',
      image: 'path/to/bob.jpg' // Replace with actual image path
    },
    {
      name: 'Daniel Enesi',
      role: 'Fullstack Developer',
      image: 'path/to/charlie.jpg' // Replace with actual image path
    }
  ];

  return (
    <div className="App">
      {/* Display a random catchphrase */}
      <h2 className="catchphrase">{getRandomCatchphrase()}</h2>
      
      {/* Start Recycling Button */}
      <a href="/street/" className="action-button">Start Recycling!</a>

      {/* Hello, Recycler! Title */}
      <h1 className="title">Hello, Recycler!</h1>

      {/* Recycling Message Component */}
      <RecyclingMessage />

      {/* Developer Section */}
      <section className="developer-section">
        <h2>Meet Our Developers</h2>
        <div className="developer-cards">
          {developers.map((dev, index) => (
            <Developer key={index} name={dev.name} role={dev.role} image={dev.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
