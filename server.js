const express = require('express');
const app = express();
const PORT = 8080;
const { disclaimerRoutes } = require('./routes');

app.use(express.json());
app.use('/disclaimer', disclaimerRoutes);
app.use('*', (req, res) => {
  res.status(400).json({
    Status: 'Bad request, Route Not Found!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});