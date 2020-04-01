const express = require ('express');
const app = express();
const port  = 3000;

app.get('/api/movies/', (req, res ) => {
    res.send('All films');
});

app.get('/api/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    res.json({id: movieId});
});

app.get('/api/employee/', (req, res) =>{
    res.sendStatus(304);
});

app.get('/api/employee/:name', (req, res) => {
    const employeeName = req.params.name
    res.status(404).send('Unable to retrieve employee' + employeeName);
});
