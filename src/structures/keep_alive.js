const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Made By <strong> Fox Davoid </strong> <br>  <h3> Provided By Fox Davoid</h3> ');
});

app.listen(port, () => {
  console.log(`Bot running on http://localhost:${port}`);
});