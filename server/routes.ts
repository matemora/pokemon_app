import { Router } from 'express'
import { abilities, type, generation } from './abilities'
import path from 'path'

const routes = Router();

routes.get('/', (req, res) => {
    res.sendFile(path.normalize(path.join(__dirname + '/../public/index.html')));
});

routes.get('/listOptions', (req, res) => {
    res.send({
        abilities: abilities,
        generation: generation,
        type: type
    });
});

export default routes