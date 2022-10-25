const express = require('express')
const cors = require('cors')

const {planetsRouter} = require('./Routes/planets/planets.router')

const app = express();
app.use(cors({
    origin : 'http://localhost:3001'
}));
app.use(express.json());
app.use(planetsRouter)

module.exports = app;
