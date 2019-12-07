const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:3c8a313a-728b-45fd-bd0f-cb20cdef3cce',
  key: '3969ae5e-1277-40de-bfb0-4ff0ee3e7e80:Xyhfn3XV3mC3bc1mEYH0xRFZVWjB+4sDSFYZMeb7agA=',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
});

app.post('/authenticate', (req, res) => {
  const {grant_type} = req.body
  res.json(chatkit.authenticate({grant_type, userId: req.query.user_id}, req.query.user_id))
});


const PORT = 3001;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});