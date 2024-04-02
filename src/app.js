
const express = require('express');

const app = express();
const port = 3000;

const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (request ,response) => {
    response.send('application up and running');
});


app.listen(port, () => {
  console.log(`The server is running`);
});

app.get('/fairys', (request, response) => {
    knex('fairy')
        .select('*')
        .then(fairys => {
            var fairyNames = fairys.map(fairy => fairy.name)
            response.json(fairyNames);
        })
})

module.exports = app;