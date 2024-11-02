// src/components/Dashboard.js
import React from 'react';
import CourseCard from './CourseCard';
import './Dashboard.css';

function Dashboard() {
  // Dummy data for courses
  const courses = [
    { title: 'Stat Mechanics', progress: '50%' },
    { title: 'Quantum Physics', progress: '80%' },
    { title: 'AI in Education', progress: '30%' },
    { title: 'Game Development', progress: '60%' },
  ];

  return (
    <div className="dashboard">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} progress={course.progress} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
