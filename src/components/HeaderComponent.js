/* HeaderComponent.js */
import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../images/img7.png'; // Provide the correct path to your logo image
 
const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="header-container">
            <Link to="/" className="header-brand">
              <img src={LogoImage} alt="AUCA Logo" className="header-logo-image" />
              AUCA
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto"> {/* Use ml-auto to align to the right */}
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login as Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/LoginT" className="nav-link">
                    Login as Teacher
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register/student" className="nav-link">
                    Register as Student
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
