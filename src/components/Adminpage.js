/* Updated HomePage.js */
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {
  FaTh,
  FaRegChartBar,
  FaCommentAlt,
  FaListAlt,
  FaBook,
  FaSignOutAlt,
} from 'react-icons/fa';
import './css/Student.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="home-page">
      
        <nav className="home-navbar home-navbar-expand-lg home-navbar-light bg-light"> {/* Changed class names */}
          <div className="home-background-section"> {/* Changed class name */}
            <img
              src={require("../images/Teach.PNG")}
              alt="Welcome to AUCA"
              className="home-welcome-image" 
            />
            <h2 className="home-welcome-message">Welcome to Exam Management Systems</h2> {/* Changed class name */}
          </div>
          <div className="home-collapse navbar-collapse" id="navbarNav"> 
            <div className="home-navbar-nav ml-auto">
              <h1 className="hohome-link-text">AUCA</h1>
              <div className="home-bars">
                <FaTh onClick={() => handleNavigation('dashboard')} />
              </div>
            </div>
            <div className="home-collapse navbar-collapse" id="navbarNav"> {/* Changed class name */}
              <div className="home-navbar-nav ml-auto">
                <Link className="home-link-course" to="/students">
                  <FaListAlt className="home-icon" />
                  <div className="home-link-text">List of Student</div>
                </Link>
                <Link className="home-link-claims" to="/exams">
                  <FaCommentAlt className="home-icon" />
                  <div className="home-link-text">List Of Exam Available</div>
                </Link>
                <Link className="home-link-exam" to="/questions">
                  <FaRegChartBar className="home-icon" />
                  <div className="home-link-text">List of questions</div>
                </Link>
                <Link className="home-link-transcript" to="/about">
                  <FaBook className="home-icon" />
                  <div className="home-link-text">About our system</div>
                </Link>
                <Link className="home-link-logout" to="/">
                  <FaSignOutAlt className="home-icon" />
                  <div className="home-link-text">Log Out</div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      

      <main>
        <h1 className="home-animated-text">Welcome to Exam Management System</h1> {/* Changed class name */}
        {/* Additional content for the homepage */}
      </main>
    </div>
  );
};

export default HomePage;
