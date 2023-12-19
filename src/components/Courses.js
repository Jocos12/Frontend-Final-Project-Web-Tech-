import React, { useState } from 'react';

const CourseTable = () => {
  // Initial course data
  const initialCourses = [
    { id: 1, name: 'Java', instructor: 'Jason', duration: '4 Month' },
    { id: 2, name: 'Web Technology', instructor: 'Patrick', duration: '4 Month' },
    // Add more courses as needed
  ];

  // State to manage the list of courses
  const [courses, setCourses] = useState(initialCourses);

  // Function to add a new course
  const addCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      name: 'Programming with C',
      instructor: 'Vivien',
      duration: '4 Month',
    };

    setCourses([...courses, newCourse]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Course Table</h1>
      <button style={styles.button} onClick={addCourse}>
        Add Course
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.instructor}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default CourseTable;
