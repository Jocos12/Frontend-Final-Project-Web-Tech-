// ListResultComponent.jsx
import React, { useState, useEffect } from 'react';
import ResultService from '../services/ResultService';

const ListResultComponent = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAllResults();
  }, []);

  const getAllResults = () => {
    ResultService.getAllResults()
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteResult = (resultId) => {
    ResultService.deleteResult(resultId)
      .then(() => {
        getAllResults();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>List Results</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>User Email</th>
            <th>Result Status</th>
            <th>Result Score</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.userEmail}</td>
              <td>{result.resultStatus}</td>
              <td>{result.resultScore}</td>
              <td>{result.code}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteResult(result.id)}
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

export default ListResultComponent;
