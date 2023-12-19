// UpdateQuestion.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionService from '../services/QuestionService';

const UpdateQuestion = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialQuestionState = {
    id: null,
    code: '',
    subjectName: '',
    answer: '',
    optionOne: '',
    optionTwo: '',
    optionThree: '',
    optionFour: '',
    question: '',
  };

  const [question, setQuestion] = useState(initialQuestionState);

  useEffect(() => {
    if (id) {
      // Fetch the question by ID and set it to the state
      QuestionService.getQuestionById(id)
        .then((response) => {
          setQuestion(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  const saveOrUpdateQuestion = () => {
    if (!question.code || !question.subjectName || !question.answer || !question.question) {
      alert('Please fill in all required fields.');
      return;
    }

    QuestionService.updateQuestion(id, question)
      .then(() => {
        alert('Question updated successfully!');
        navigate('/questions');
      })
      .catch((error) => {
        console.error('Error updating question:', error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Update Question</h2>
      <form>
        <div className="form-group">
          <label>Code:</label>
          <input
            type="text"
            className="form-control"
            name="code"
            value={question.code}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Subject Name:</label>
          <input
            type="text"
            className="form-control"
            name="subjectName"
            value={question.subjectName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Answer:</label>
          <input
            type="text"
            className="form-control"
            name="answer"
            value={question.answer}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Option One:</label>
          <input
            type="text"
            className="form-control"
            name="optionOne"
            value={question.optionOne}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Option Two:</label>
          <input
            type="text"
            className="form-control"
            name="optionTwo"
            value={question.optionTwo}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Option Three:</label>
          <input
            type="text"
            className="form-control"
            name="optionThree"
            value={question.optionThree}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Option Four:</label>
          <input
            type="text"
            className="form-control"
            name="optionFour"
            value={question.optionFour}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Question:</label>
          <input
            type="text"
            className="form-control"
            name="question"
            value={question.question}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" className="btn btn-success" onClick={saveOrUpdateQuestion}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateQuestion;
