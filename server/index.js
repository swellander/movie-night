const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

//socket setup
const socket = require('socket.io');
const io = socket(server);
//pass new io object to the funtion written in ./socket.js
require('./socket')(io);

//serve static files with middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//router
app.use('/api', require('./api'))

//error handling route
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
  next();
});
