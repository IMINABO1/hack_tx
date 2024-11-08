import React from 'react';

const Developer = ({ name, role, image }) => {
  return (
    <div className="developer-card">
      <img src={image} alt={`${name}'s profile`} className="developer-image" />
      <h2 className="developer-name">{name}</h2>
      <p className="developer-role">{role}</p>
    </div>
  );
};

export default Developer;
