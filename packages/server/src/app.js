const express = require('express');
const apiRouter = require('./apiRouter');

const app = express();

// Express requires a file system path to serve up static assets.  Since we're using npm
// workspaces with separate modules between our server and client, we'll use a simple
// work-around to get the path to our built client code instead of hard-coding any assumptions.
// - First resolve the absolute path to the index.html file in the client module
// - Then remove the index.html portion of the path to get the reference to just the directory
const clientIndexPath = require.resolve('@quizzer/client/dist/index.html');
const clientDirPath = clientIndexPath.replace('index.html', '');
app.use(express.static(clientDirPath));

app.use('/api', apiRouter);

// Default handler - if unknown path, just respond with the default html file.
// This allows us to use HTML5 history mode in our client side routing.
// If the path is unknown to the server, then it should be a client side route, in which
// case just return the default index.html file and let the client side router take
// care of the rest.
app.use('*', (req, res) => {
  res.sendFile(clientIndexPath);
});

module.exports = app;