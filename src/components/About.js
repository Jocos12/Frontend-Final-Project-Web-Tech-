import React, { useState } from 'react';

const OnlineExamManagementSystem = () => {
  // Placeholder data for exams
  const [exams, setExams] = useState([
    { id: 1, name: 'Mathematics Exam', duration: '2 hours' },
    { id: 2, name: 'Science Exam', duration: '1.5 hours' },
    // Add more exams as needed
  ]);

  // Function to add a new exam
  const addExam = () => {
    const newExam = {
      id: exams.length + 1,
      name: 'New Exam',
      duration: '1 hour',
    };

    setExams([...exams, newExam]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Online Exam Management System</h1>
      <p style={styles.description}>
        An Online Exam Management System is a comprehensive digital platform designed to streamline
        and enhance the process of conducting examinations over the internet. This sophisticated
        system leverages technology to offer a range of features that contribute to the efficiency,
        security, and accessibility of exams.
      </p>
      
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

export default OnlineExamManagementSystem;
