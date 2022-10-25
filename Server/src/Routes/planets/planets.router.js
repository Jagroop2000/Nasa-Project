const express = require('express');

const planetController = require('./planet.controller')
const planetsRouter = express.Router();


planetsRouter.get('/planets',planetController.getAllPlanets);

module.exports = {planetsRouter}