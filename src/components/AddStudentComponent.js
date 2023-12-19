import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaBook, FaGraduationCap, FaKey, FaPhone } from 'react-icons/fa';
import StudentService from '../services/StudentService';
import './css/Student.css';
import './css/RegisterStudent.css'; 

const AddStudentComponent = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [number, setNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [faculty, setFaculty] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  const { id: studentId } = useParams();

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();

    const student = {
      id,
      firstName,
      lastName,
      emailId,
      number,
      department,
      faculty,
      password,
      phoneNumber,
    };

    if (studentId) {
      // Update student logic
      StudentService.updateStudent(studentId, student)
        .then((response) => {
          navigate('/students');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Create student logic
      StudentService.createStudent(student)
        .then((response) => {
          console.log(response.data);
          navigate('/students');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (studentId) {
      StudentService.getStudentById(studentId)
        .then((response) => {
          setId(response.data.id);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmailId(response.data.emailId);
          setNumber(response.data.number);
          setDepartment(response.data.department);
          setFaculty(response.data.faculty);
          setPassword(response.data.password);
          setPhoneNumber(response.data.phoneNumber);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [studentId]);

  const title = () => {
    return studentId ? <h2 className="text-center">Update Student</h2> : <h2 className="text-center">Add Student</h2>;
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
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
                <FaBook className="icon" />
                Number (Semester) :
              </label>
              <select
                className="form-control"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((sem) => (
                  <option key={sem} value={sem}>
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                <FaGraduationCap className="icon" />
                Department :
              </label>
              <select
                className="form-control"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Networking">Networking</option>
                <option value="Information Management">Information Management</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                <FaBook className="icon" />
                Faculty :
              </label>
              <select
                className="form-control"
                name="faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              >
                <option value="">Select Faculty</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Theology">Theology</option>
                <option value="Medecine">Medicine</option>
                <option value="Other">Other</option>
              </select>
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

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateStudent(e)}
                >
                  Submit
                </button>
                <Link to="/students" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentComponent;
