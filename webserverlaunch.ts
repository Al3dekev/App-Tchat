'use strict';
const express = require('express');
const compression = require('compression');

const PORT = 4460;
const AppFolder = 'dist/App-Tchat';

const app = express();
app.use(compression());


// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(AppFolder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', (req, res) => {
  res.status(200).sendFile(`/`, {root: AppFolder});
});

// ---- START UP THE NODE SERVER  ----
app.listen(PORT, () => {
  console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + PORT);
});
