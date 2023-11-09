import React from 'react';
import './courses.css'
import CourseCard from '../components/courseCard'; 
import Navbar from "../components/Navbar"

const CoursesPage = () => {
  const courses = [
    {
      title: 'Data Structures and Algorithms',
      description: 'Learn about fundamental data structures and algorithms.',
    },
    {
      title: 'Database Management Systems',
      description: 'Explore the principles of database management systems.',
    },
    {
      title: 'Mathematics',
      description: 'Enhance your mathematical skills and knowledge.',
    },
    {
      title: 'Discrete Maths',
      description: 'Gain insights into discrete maths',
    },
  ];

  return (

    <>
    <Navbar/>
    <div className="courses-page">
      <h1 className='coursesh1'>Courses</h1>
      <div className="course-cards">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>
    </div>
    </>
  );
};

export default CoursesPage;
