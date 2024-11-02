// src/components/CourseCard.js
import React from 'react';
import './CourseCard.css';

function CourseCard({ title, progress }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: progress }}></div>
      </div>
      <p>{progress} Complete</p>
    </div>
  );
}

export default CourseCard;
