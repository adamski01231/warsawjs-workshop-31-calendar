const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, 'config', 'app.env')
})

const express = require('express');

const app = express();

const port = process.env.PORT;

require('./web/routing/base.router')(app);
require('./web/routing/calendar.router')(app);

app.listen(port, () => {
  console.log(`Server listenning on port ${port}`);
});
