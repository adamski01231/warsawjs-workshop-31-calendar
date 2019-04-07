const path = require('path');
const r = require('./web/routing/base.router');

require('dotenv').config({
  path: path.join(__dirname, 'config', 'app.env')
})

const express = require('express');

const app = express();

const port = process.env.PORT;

app.use('/', r);

app.listen(port, () => {
  console.log(`Server listenning on port ${port}`);
});
