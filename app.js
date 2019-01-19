const express = require('express');
const app = express();

app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send('development');
  } else {
    res.send('production');
  }
  
  
});

const port = process.env.PORT || 7777;

app.listen(port, () => {
  console.log('Server is listening.....');
});