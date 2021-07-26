const app = require('express').Router();
const {getDisclaimer} = require('../controllers');

app.get('/', getDisclaimer);


app.post('/', (req, res) => {
  res.status(200).json({
    'Status': 'Good to see!'
  });
})

module.exports = app;