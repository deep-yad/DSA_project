import React, { useState } from 'react';
import "./inputform.css";
import axios from 'axios';

const courseOptions = ['DSA', 'DBMS', 'Mathematics', 'DM'];

const AttendanceForm = () => {
  const [courseDetails, setCourseDetails] = useState('');
  const [image, setImage] = useState(null);

  const [selectedDate, setSelectedDate] = useState('');

  const handleImageChange = (event) => {
    // Handle image upload logic here
    const file = event.target.files[0];
    setImage(file);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleCourseDetailsChange = (event) => {
    setCourseDetails(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted with:', image);
    const res=await axios.post("http://127.0.0.1:8000/api/process-image", image);
    console.log(res);
  };

  return (

    <div className="background">
      <div className="container">
        <div className="card1">
          <h1 className="card1title">
          IIT Indore Attendance System
          </h1>
        </div>
        <div className="card">
          <h1>Attendance Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="courseDetails">Course Details:</label>
              <select id="courseDetails" value={courseDetails} onChange={handleCourseDetailsChange}>
                <option value="" disabled>Select a course</option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input className='inputcss' type="file" id="image" accept="image/*" onChange={handleImageChange} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input className='inputcss' type="date" id="date" value={selectedDate} onChange={handleDateChange} />
            </div>

            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendanceForm;



