const express = require('express');
const app = express();
const port = 3000;

app.get('/films', (req, res) => {
    res.json(films);
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
// run with `node server.mjs`
