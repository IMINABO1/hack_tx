import React from 'react';
import RecyclingMessage from './RecyclingMessage'; // Adjust the path if necessary
import './App.css'; // Make sure to import the CSS file

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

const App = () => {
  // Function to get a random catchphrase
  const getRandomCatchphrase = () => {
    const randomIndex = Math.floor(Math.random() * catchphrases.length);
    return catchphrases[randomIndex];
  };

  return (
    <div className="App">
      {/* Display a random catchphrase */}
      <h2 className="catchphrase">{getRandomCatchphrase()}</h2>
      <a href="/street/" className="action-button">Start Recycling!</a> {/* Changed to Link */}
      <h1 className="title">Hello, Recycler!</h1>
      <RecyclingMessage />
    </div>
  );
};

export default App;
