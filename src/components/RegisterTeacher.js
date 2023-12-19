import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaKey, FaPhone } from 'react-icons/fa';
import TeacherService from '../services/TeacherLoginService';
import './css/RegisterStudent.css';

const RegisterTeacher = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const registerTeacher = (e) => {
    e.preventDefault();
    if (!id || !firstName || !lastName || !emailId || !password || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }
    const teacher = {
      id,
      firstName,
      lastName,
      emailId,
      password,
      phoneNumber,
    };

    // Register teacher logic
    TeacherService.createTeacher(teacher)
      .then((response) => {
        console.log(response.data);
        navigate('/'); // Redirect to teacher login page after successful registration
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-teacher-container">
      <div className="card">
        <h2 className="text-center">Register Teacher</h2>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>
                <FaUser className="icon" />
                ID :
              </label>
              <input
                type="text"
                placeholder="Enter ID"
                name="id"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FaUser className="icon" />
                First Name :
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                name="firstName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FaUser className="icon" />
                Last Name :
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                name="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FaEnvelope className="icon" />
                Email Id :
              </label>
              <input
                type="email"
                placeholder="Enter email Id"
                name="emailId"
                className="form-control"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FaKey className="icon" />
                Password :
              </label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FaPhone className="icon" />
                Phone Number :
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <button className="btn btn-success" onClick={(e) => registerTeacher(e)}>
              Register
            </button>
            <Link to="/" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeacher;
