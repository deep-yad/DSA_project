import React from 'react';
import './AboutUs.css'; // Import the CSS for the about us page
import TeamMemberCard from '../components/AboutUsCard'; // Import the TeamMemberCard component
import Navbar from "../components/Navbar"

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Debasish Padhy',
      Academics:"B.TECH 2nd year CSE",
      description: 'Pursuing B.Tech in Computer Science and Engg.',
      imageUrl:'/images/debasish.jpg',
    },
    {
      name: 'Pranav Kalwaghe',
      Academics:"B.TECH 2nd year CSE",
      description: 'Pursuing B.Tech in Computer Science and Engg.',
      imageUrl:'/images/pranav.jpg',
    },
    {
      name: 'Deepak Yadav',
      Academics:"B.TECH 2nd year CSE",
      description: 'Pursuing B.Tech in Computer Science and Engg.',
      imageUrl: '/images/deepak.jpg',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="about-us-page">
        <h1 className="ourteam">
        Our Team
        </h1>
      <div className="team-member-cards">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.Academics}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
    
    </>
  );
};

export default AboutUsPage;
