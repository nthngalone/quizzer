const express = require('express');
const { getQuizzes, getQuiz } = require('./services/contentService');

const router = express.Router();

// error handler middleware that is specific to this api router
router.use((err, req, res, next) => {
    console.error('Error: ', err);
    if (res.headersSent) {
        return next(err)
    }
    res.sendStatus(500);
});

router.get('/quizzes', (req, res, next) => {
    (async function() {
        try {
            const quizzes = await getQuizzes();
            res.send(quizzes);
        } catch(err) {
            next(err);
        }
    })();
});

router.get('/quizzes/:id', (req, res, next) => {
    (async function() {
        try {
            const id = parseInt(req.params.id);
            // TODO handle a non-numeric id
            const quiz = await getQuiz(id);
            if (quiz) {
                // Map the non-sensitive data that can be sent to the client
                res.send({
                    name: quiz.name,
                    description: quiz.description,
                    instructions: quiz.instructions,
                    questions: quiz.questions.map(({ prompt, options }) => ({
                        prompt,
                        options
                    }))
                });
            } else {
                res.status(404);
            }
        } catch(err) {
            next(err);
        }
    })();
});

module.exports = router;