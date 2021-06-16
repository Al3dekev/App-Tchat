'use strict';
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const https = require('https');
const fs = require('fs');

const PORT = 4460;
const AppFolder = 'dist/App-Tchat';

const app = express();
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
	  defaultSrc: ["*"],
      connectSrc: ["'self'", "https://91.170.176.159:1789", "https://localhost:1789"],
      styleSrc: ["'self'", "'unsafe-inline'", "*.googleapis.com"],
      fontSrc: ["'self'", "*"],
      scriptSrc: ["'self'", "'unsafe-inline'", "*"],
      objectSrc: ["'self'", "'unsafe-inline'"],
      frameSrc: ["'self'"],
      imgSrc: ["'self'"]
    },
  })
);

/*app.use(express.csrf())
app.use(function (req, res, next) {
  res.cookie('XSRF-TOKEN', req.session._csrf);
  res.locals.csrftoken = req.session._csrf;
  next();
})*/


// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(AppFolder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', (req, res) => {
  res.status(200).sendFile(`/`, {root: AppFolder});
});

// ---- START UP THE NODE SERVER  ----
https.createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/certificate.pem'),
    passphrase: 'mMMCACy5ZcuwqWnK'
}, app)
.listen(PORT, () => {
  console.log('Node Express server for ' + app.name + ' listening on https://localhost:' + PORT);
});
