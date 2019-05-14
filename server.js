const express = require('express');
const helmet = require('helmet');
const logger = require('morgan')

const server = express();

//Global Middleware

//built in middleware
server.use(express.json());

//third party middleware
server.use(helmet());
server.use(logger('dev'));

//custom middleware 
server.use(infoLogger);

//router
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function infoLogger(req, res, next) {
  console.log(`${req.method} Request, Currently on URL: "${req.url}", Timestamp: ${Date()} `);
  next();
};

module.exports = server;
