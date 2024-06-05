import axios from 'axios';
import mock from './apiServiceMocks';

function getClient() {
    const client = axios.create();
    if (import.meta.env.MODE === 'development') {
        mock(client);
    }
    return client;
}

const returnData = ({ data }) => data;

export function getQuizzes() {
    return getClient().get('/api/quizzes').then(returnData);
}

export function getQuiz(quizId) {
    return getClient().get(`/api/quizzes/${quizId}`).then(returnData);
}

export function createSession() {
    return getClient().post(`/api/session`).then(returnData);
}

export function submitAnswer(sessionId, quizId, questionId, answer) {
    return getClient().post(`/api/session/${sessionId}/quizzes/${quizId}/questions/${questionId}`, answer).then(returnData);
}