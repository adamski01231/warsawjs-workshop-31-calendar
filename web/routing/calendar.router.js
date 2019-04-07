const express = require('express');

const router = express.Router();

router.get('/api/calendar', (req, res) => {
  const response = {
    data: [
      {
        date: '2019-02-10',
        events: [
          {
            id: '1',
            title: 'sample event'
          }
        ]
      }
    ]
  }

  res.status(200).json(response);
});

module.exports = (app) => {
  app.use(router);
};