const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Marie K. Ekeberg", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2010", "yearTo": "2018", "place": "BBC Radio", "comment": "Was doing stuff"}, {"yearFrom": "2009", "yearTo": "2010", "place": "EVRY", "comment": "Code code code"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2005", "yearTo": "2007", "place": "University of Oslo", "comment": "Studying"}, {"yearFrom": "2001", "yearTo": "2004", "place": "School of sitting at home all day without friends", "comment": "Coding alone"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
