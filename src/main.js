import express from 'express';
import bodyParser from 'body-parser';
import db from './database';

const server = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
const router = express.Router();
server.use(jsonParser);
server.use(urlencodedParser);

server.use('/api', router);

server.listen(8089);
console.log('start register server on 8089.');
router.post('/register', (request, response) => {
    var csv = db.initialize();
    debugger;
    csv.insert({
        username: request.body.username,
        tel: request.body.tel
    }).then(data => {
        return response.json({ result: data > 0 });
    });
});

router.get('/', (request, response) => {
    var csv = db.initialize();
    csv.get().then(data => {
        return response.json(data)
    });
});
