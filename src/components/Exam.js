import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exam = () => {
  const [userEmail, setUserEmail] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [maxDuration] = useState(600);
  const [timeRemaining, setTimeRemaining] = useState(maxDuration);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/questions');
        setQuestions(response.data);
        setStartTime(new Date());
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = now - startTime;
      const secondsElapsed = Math.floor(timeDifference / 1000);

      setTimeRemaining(maxDuration - secondsElapsed);

      if (secondsElapsed >= maxDuration) {
        clearInterval(timer);
        setShowResult(true);
        setElapsedTime(Math.min(secondsElapsed, maxDuration));
        submitResult();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, maxDuration]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const isCorrectAnswer =
      questions[currentQuestion] && selectedOption === questions[currentQuestion].answer;

    if (isCorrectAnswer) {
      setScore(score + 10); // Each question is worth 10 points
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
      const endTime = new Date();
      const timeDifference = endTime - startTime;
      const secondsElapsed = Math.floor(timeDifference / 1000);
      setElapsedTime(Math.min(secondsElapsed, maxDuration));
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const submitResult = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/results', {
        code: courseCode, // Assuming course code is related to the result
        subjectName: '', // Add subject name if available
        resultScore: score,
        resultStatus: score >= 20 ? 'Pass' : 'Fail', // Assuming passing score is 20 out of 40
        userEmail,
        marks: 0,
      });
      console.log('Result submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting result:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      {!showResult ? (
        <div style={{ marginBottom: '20px' }}>
          <h2>Question {currentQuestion + 1}</h2>
          <p>Time remaining: {formatTime(timeRemaining)}</p>
          <p>{questions[currentQuestion]?.question || 'Loading...'}</p>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {['optionOne', 'optionTwo', 'optionThree', 'optionFour'].map((option) => (
              <li key={option} style={{ marginBottom: '10px' }}>
                <label>
                  <input
                    type="radio"
                    value={questions[currentQuestion]?.[option]}
                    checked={selectedOption === questions[currentQuestion]?.[option]}
                    onChange={() => handleOptionChange(questions[currentQuestion]?.[option])}
                  />
                  {questions[currentQuestion]?.[option]}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion} style={{ padding: '10px', marginTop: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Exam Completed!</h2>
          <p>Your score: {score} out of 40</p>
          <p>Time spent: {formatTime(elapsedTime)}</p>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            User Email:
            <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Course Code:
            <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
          </label>
          <button onClick={submitResult} style={{ padding: '10px', marginTop: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit Exam</button>
          <Link to="/home" style={{ display: 'block', marginTop: '10px', padding: '10px', backgroundColor: '#3498db', color: '#fff', textDecoration: 'none', borderRadius: '4px', cursor: 'pointer' }}>Go Back</Link>
        </div>
      )}
    </div>
  );
};

export default Exam;
