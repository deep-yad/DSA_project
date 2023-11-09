import React from 'react';
import "./AboutUs.css";

const TeamMemberCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={`${name} Image`} />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TeamMemberCard;
