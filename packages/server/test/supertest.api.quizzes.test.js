const app = require('../src/app');
const request = require('supertest');

describe('GET /api/quizzes', () => {
    test('returns a 200 response with a list of quizzes', async () => {
        return request(app)
            .get('/api/quizzes')
            .expect(200, [{ id: 0, name: 'Quiz 1' }, { id: 1, name: 'Quiz 2' }]);
    });
});

describe('GET /api/quizzes/:id', () => {
    test('returns a 200 response with quiz details', async () => {
        return request(app)
            .get('/api/quizzes/0')
            .expect(200, {
                name: 'Quiz 1',
                questions: [{
                    prompt: 'Question 1',
                    options: {
                        a: 'Option A',
                        b: 'Option B',
                        c: 'Option C',
                        d: 'Option D'
                    }
                }, {
                    prompt: 'Question 2',
                    options: {
                        a: 'Option A',
                        b: 'Option B',
                        c: 'Option C',
                        d: 'Option D'
                    }
                }]
            });
    });
});
