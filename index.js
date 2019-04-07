const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, 'config', 'app.env')
})

const express = require('express');

const app = express();

const port = process.env.PORT;

app.use('/', require('./web/routing/base.router'));

app.listen(port, () => {
  console.log(`Server listenning on port ${port}`);
});
