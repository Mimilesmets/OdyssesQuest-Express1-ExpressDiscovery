const express = require ('express');
const app = express();
const port  = 3000;

app.get('/api/movies/', (req, res ) => {
    res.send('All films');
});

app.get('/api/movies/\<movie id\>', (req, res) => {
    res.json({id: '\<movie id\>'});
});

app.get('/api/employee/', (req, res) =>{
    res.sendStatus(304);
});

app.get('_/api/employee?name=\<employee name\> _ ', (req, res) => {
    res.status(404).send('Unable to retrieve employee" <name of employee the employee \>');
});
