import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exam from './components/Exam'; // Import the Exam component
import './App.css';
import AddExam from './components/AddExam';
import ListExamComponent from './components/ListExamComponent';
import AddQuestion from './components/AddQuestion';
import ListQuestionComponent from './components/ListQuestionComponent';
import Results from './components/Result';
import AddStudentComponent from './components/AddStudentComponent';
import Home from './components/Home';
import LoginStudent from './components/LoginStudent';
import RegisterStudent from './components/RegisterStudent';
import UpdateQuestion from './components/UpdateQuestion';
import ListStudentComponent from './components/ListStudentComponent';
import Adminpage from './components/Adminpage';
import HeaderComponent from './components/HeaderComponent';
import LoginTeacher from './components/LoginTeacher';

import HomePage from './components/HomePage';
import ListResultComponent from './components/ListResultComponent';
import RegisterTeacher from './components/RegisterTeacher';

import StudentListExam from './components/StudentListExam';
import CourseTable from './components/Courses';

import About from './components/About';

function App() {
  return (
  <Router>
  <HeaderComponent />
    <div className="container">
<Routes>
  <Route path="/" element={<Home/>} />
  

  <Route path="/result" element={<ListResultComponent />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<LoginStudent />} />
  <Route path="/add-exam" element={<AddExam />} />
  <Route path="/exams" element={<ListExamComponent />} />
  <Route path="/edit-exam/:id" element={<AddExam />} />
<Route path="/add-question" element={<AddQuestion />} />
<Route path="/questions" element={<ListQuestionComponent />} />
<Route path="/students" element={<ListStudentComponent />} />

<Route path="/studentexam" element={<StudentListExam />} />
<Route path="/edit-student/:id" element={<AddStudentComponent />} />
<Route path="/LoginT" element ={<LoginTeacher />} />



<Route path="/course" element={<CourseTable />} />
<Route path="/register/student" element={<RegisterStudent />} />
<Route path="/add-student" element={<AddStudentComponent />} />
<Route path="/results" element={<Results />} />
<Route path='/adminpage' element={<Adminpage />} />
<Route path="/home" element={<HomePage />} />

<Route path="/register/teacher" element={<RegisterTeacher />} />
<Route path="/exam" element={<Exam />} />

<Route path="/edit-question/:id" element={<UpdateQuestion />} />
</Routes>
    </div>
  </Router>
  );
}

export default App;
