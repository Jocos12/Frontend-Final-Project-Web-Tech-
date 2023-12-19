// ListQuestionComponent.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuestionService from '../services/QuestionService';

const ListQuestionComponent = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAllQuestions();
  }, []);

  const getAllQuestions = () => {
    QuestionService.getAllQuestions()
      .then((response) => {
        setQuestions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteQuestion = (questionId) => {
    QuestionService.deleteQuestion(questionId)
      .then((response) => {
        getAllQuestions();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List Questions</h2>
      <Link to="/add-question" className="btn btn-primary mb-2">
        Add Question
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Question Id</th>
            <th>Code</th>
            <th>Subject Name</th>
            <th>Answer</th>
            <th>Option One</th>
            <th>Option Two</th>
            <th>Option Three</th>
            <th>Option Four</th>
            <th>Question</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.code}</td>
              <td>{question.subjectName}</td>
              <td>{question.answer}</td>
              <td>{question.optionOne}</td>
              <td>{question.optionTwo}</td>
              <td>{question.optionThree}</td>
              <td>{question.optionFour}</td>
              <td>{question.question}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-question/${question.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteQuestion(question.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListQuestionComponent;
