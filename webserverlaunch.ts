'use strict';
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const PORT = 4460;
const AppFolder = 'dist/App-Tchat';

const app = express();
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ['none'],
      connectSrc: ['\'self\'', '91.170.176.159:1789', 'localhost:1789'],
      styleSrc: ['\'self\'', '\'unsafe-inline\'', '*.googleapis.com'],
      fontSrc: ['\'self\'', '*'],
      scriptSrc: ['\'self\'', '\'unsafe-inline\'', '*'],
      objectSrc: ['\'self\'', '\'unsafe-inline\''],
      frameSrc: ['\'self\''],
      imgSrc: ['\'self\'']
    },
  })
);


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
