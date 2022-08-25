const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (_, res) => {
  res.send('<h2>My Simple App with Docker + Kubernetes! (v.1)</h2>');
});

app.listen(
  PORT, 
  () => console.log(`Server is running at port ${PORT}!`)
);