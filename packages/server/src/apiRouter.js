const express = require('express');

const router = express.Router();

// error handler middleware that is specific to this api router
router.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    console.error(err);
    res.sendStatus(500);
});

module.exports = router;