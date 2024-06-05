import MockAdapter from 'axios-mock-adapter';
import quizzes from '@quizzer/common/data/quizzes.json';

const sessions = [];

export default function(axiosClient) {
    const mock = new MockAdapter(axiosClient);
    mock.onGet('/api/quizzes').reply(200, quizzes.map((quiz, index) => ({
        id: index,
        name: quiz.name
    })));
    mock.onGet(/\/api\/quizzes\/\d+/).reply(function (config) {
        const [ ,,,id ] = config.url.split('/');
        // the actual id can be grabbed from config.url
        return [200, quizzes[id]];
    });
    mock.onPost('/api/session').reply(function () {
        sessions.push({});
        return [200, sessions.length-1];
    });
}
