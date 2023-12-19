import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExamService from '../services/ExamService';

const ListExamComponent = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    getAllExams();
  }, []);

  const getAllExams = () => {
    ExamService.getAllExams()
      .then((response) => {
        setExams(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteExam = (examId) => {
    ExamService.deleteExam(examId)
      .then((response) => {
        getAllExams();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List Exams</h2>
      {/* <Link to="/add-exam" className="btn btn-primary mb-2">
        Add Exam
      </Link> */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Exam Id</th>
            <th>Code</th>
            <th>Subject Name</th>
            <th>Total Questions</th>
            <th>Pass Marks</th>
            <th>Marks</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.id}</td>
              <td>{exam.code}</td>
              <td>{exam.subjectName}</td>
              <td>{exam.totalQuestions}</td>
              <td>{exam.passMarks}</td>
              <td>{exam.marks}</td>
              <td>
                {/* <Link className="btn btn-info" to={`/edit-exam/${exam.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteExam(exam.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListExamComponent;
