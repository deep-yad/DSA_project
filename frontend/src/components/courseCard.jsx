import React from 'react';
import './courseCard.css';  // Import the CSS for the course card

const CourseCard = ({ title, description }) => {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;
