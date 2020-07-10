const { Router } = require('express')
const filters = require('./abilities')

const routes = Router();

routes.get('/', (req, res) => {
    res.sendFile(path.normalize(path.join(__dirname + '/../public/index.html')));
});

routes.get('/listOptions', (req, res) => {
    res.send({
        abilities: filters.abilities,
        generation: filters.generation,
        type: filters.type
    });
});

exports.routes = routes