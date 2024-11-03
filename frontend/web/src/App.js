import React from 'react';
import RecyclingMessage from './RecyclingMessage'; // Adjust the path if necessary
import './App.css'; // Make sure to import the CSS file

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Hello, Recycler!</h1>
      <RecyclingMessage />
    </div>
  );
};

export default App;
