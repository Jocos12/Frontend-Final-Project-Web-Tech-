// ResultService.js
import axios from 'axios';

const RESULT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/results';

class ResultService {
  getAllResults() {
    return axios.get(RESULT_BASE_REST_API_URL)
      .catch((error) => {
        console.error('Error fetching results:', error);
        throw error;
      });
  }

  deleteResult(resultId) {
    return axios.delete(`${RESULT_BASE_REST_API_URL}/${resultId}`)
      .catch((error) => {
        console.error(`Error deleting result with ID ${resultId}:`, error);
        throw error;
      });
  }
}

export default new ResultService();
