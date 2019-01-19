const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Node.js');
})

const port = process.env.PORT || 7777;

app.listen(port, () => {
  console.log('Server is listening.....');
});