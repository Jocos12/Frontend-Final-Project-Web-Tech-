import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ExamService from '../services/ExamService';
import './css/AddExam.css';
const AddExam = () => {
  const [code, setCode] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [passMarks, setPassMarks] = useState(0);
  const [marks, setMarks] = useState(0);
  const [description, setDescription] = useState('');
  const [examDate, setExamDate] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateExam = (e) => {
    e.preventDefault();

    const exam = {
      code,
      subjectName,
      totalQuestions,
      passMarks,
      marks,
      description,
      examDate,
    };

    if (id) {
      ExamService.updateExam(id, exam)
        .then((response) => {
          navigate('/exams');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ExamService.createExam(exam)
        .then((response) => {
          console.log(response.data);
          navigate('/exams');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      ExamService.getExamById(id)
        .then((response) => {
          setCode(response.data.code);
          setSubjectName(response.data.subjectName);
          setTotalQuestions(response.data.totalQuestions);
          setPassMarks(response.data.passMarks);
          setMarks(response.data.marks);
          setDescription(response.data.description);
          setExamDate(response.data.examDate);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const title = () => {
    return id ? <h2 className="text-center">Update Exam</h2> : <h2 className="text-center">Add Exam</h2>;
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
                <div className="form-group mb-2">
                  <label className="form-label">Code :</label>
                  <input
                    type="text"
                    placeholder="Enter code"
                    name="code"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Subject Name :</label>
                  <input
                    type="text"
                    placeholder="Enter subject name"
                    name="subjectName"
                    className="form-control"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Total Questions :</label>
                  <input
                    type="number"
                    placeholder="Enter total questions"
                    name="totalQuestions"
                    className="form-control"
                    value={totalQuestions}
                    onChange={(e) => setTotalQuestions(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Pass Marks :</label>
                  <input
                    type="number"
                    placeholder="Enter pass marks"
                    name="passMarks"
                    className="form-control"
                    value={passMarks}
                    onChange={(e) => setPassMarks(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Marks :</label>
                  <input
                    type="number"
                    placeholder="Enter marks"
                    name="marks"
                    className="form-control"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Description :</label>
                  <input
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Exam Date :</label>
                  <input
                    type="date"
                    name="examDate"
                    className="form-control"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={(e) => saveOrUpdateExam(e)}>
                  Submit
                </button>
                <Link to="/exams" className="btn btn-danger">
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

export default AddExam;
