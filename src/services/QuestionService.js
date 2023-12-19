import axios from 'axios';

const QUESTION_BASE_REST_API_URL = 'http://localhost:8080/api/v1/questions';

class QuestionService {
  getAllQuestions() {
    return axios.get(QUESTION_BASE_REST_API_URL);
  }

  createQuestion(question) {
    return axios.post(QUESTION_BASE_REST_API_URL, question);
  }

  getQuestionById(id) {
    return axios.get(QUESTION_BASE_REST_API_URL + '/' + id);
  }

  updateQuestion(id, question) {
    return axios.put(QUESTION_BASE_REST_API_URL + '/' + id, question);
  }

  deleteQuestion(id) {
    return axios.delete(QUESTION_BASE_REST_API_URL + '/' + id);
  }
}

export default new QuestionService();
