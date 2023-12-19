// Results.js
import React from 'react';

const Results = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Exam Results</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
    </div>
  );
};

export default Results;
