const quizzes = [{
    name: 'Quiz 1',
    questions: [{
        prompt: 'Question 1',
        options: {
            a: 'Option A',
            b: 'Option B',
            c: 'Option C',
            d: 'Option D'
        },
        answer: 'a'
    }, {
        prompt: 'Question 2',
        options: {
            a: 'Option A',
            b: 'Option B',
            c: 'Option C',
            d: 'Option D'
        },
        answer: 'b'
    }]
}, {
    name: 'Quiz 2',
    questions: [{
        prompt: 'Question 1',
        options: {
            a: 'Option A',
            b: 'Option B',
            c: 'Option C',
            d: 'Option D'
        },
        answer: 'a'
    }, {
        prompt: 'Question 2',
        options: {
            a: 'Option A',
            b: 'Option B',
            c: 'Option C',
            d: 'Option D'
        },
        answer: 'b'
    }, {
        prompt: 'Question 3',
        options: {
            a: 'Option A',
            b: 'Option B',
            c: 'Option C',
            d: 'Option D'
        },
        answer: 'c'
    }]
}];

module.exports.getQuizzes = async () => {
    return quizzes.map((quiz, index) => ({
        id: index,
        name: quiz.name
    }));
};

module.exports.getQuiz = async (id) => {
    if (id >= quizzes.length) {
        return null;
    } else {
        return quizzes[id];
    }
};