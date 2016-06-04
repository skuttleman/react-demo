'use strict';

let express = require('express'), app = express();
let spellcheck = require('./services/spellcheck');
let cors = require('cors');

app.use(cors());

app.use('/', (request, response) => {
  spellcheck(request.headers.phrase || '')
  .then(value => response.json({ value }))
  .catch(error => response.status(400).json({ error }));
});

app.listen(9999, () => {
  console.log('The server is listening on port 9999.');
});
