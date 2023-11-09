import logo from './logo.svg';
import './App.css';
import Homepage from "../src/pages/homepage"
import AboutUs from "../src/pages/AboutUs"
import Courses from "../src/pages/Courses"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Homepage  />}></Route>
        <Route exact path='/aboutus' element={<AboutUs  />}></Route>
        <Route exact path='/courses' element={< Courses />}></Route>

      </Routes>

    </Router>
  );
}

export default App;
