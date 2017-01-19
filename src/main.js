import express from 'express';
import bodyParser from 'body-parser';
import db from './database';

const server = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
const router = express.Router();
server.use(jsonParser);
server.use(urlencodedParser);

server.use('/api', router);

server.listen(8089);
console.log('start register server on 8089.');
router.post('/register', (request, response) => {
  const csv = db.initialize();
  csv.insert({
    username: request.body.username,
    tel: request.body.tel,
  }).then(data => response.json({ result: data > 0 }));
});

router.get('/', (request, response) => {
  const csv = db.initialize();
  csv.get().then(data => response.json(data));
});
