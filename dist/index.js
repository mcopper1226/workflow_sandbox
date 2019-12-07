"use strict";

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
  res.send('app is running!');
});
app.get('/mongo', (req, res) => {
  res.send(`mongo url set from cli: ${process.env.MONGODB_URI}`);
});
app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}`);
});