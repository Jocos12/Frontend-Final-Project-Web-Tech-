import axios from 'axios';

const EXAM_BASE_REST_API_URL = 'http://localhost:8080/api/v1/exams';

class ExamService {
  getAllExams() {
    return axios.get(EXAM_BASE_REST_API_URL);
  }

  createExam(exam) {
    return axios.post(EXAM_BASE_REST_API_URL, exam);
  }

  getExamById(id) {
    return axios.get(EXAM_BASE_REST_API_URL + '/' + id);
  }

  updateExam(id, exam) {
    return axios.put(EXAM_BASE_REST_API_URL + '/' + id, exam);
  }

  deleteExam(id) {
    return axios.delete(EXAM_BASE_REST_API_URL + '/' + id);
  }
}

export default new ExamService();
