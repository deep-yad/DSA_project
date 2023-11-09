import React from 'react'
import GalaxyBackground from '../components/galaxyBackground'
import AttendanceForm from '../components/inputForm'
import Navbar from '../components/Navbar'
import './homepage.css';

export const Homepage = () => {
  return (
    <div className="app">
      <GalaxyBackground />
      <div className="form-container">
      <Navbar/>
        <AttendanceForm />
      </div>
    </div>
  )
}


export default Homepage;