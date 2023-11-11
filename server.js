const express = require('express');
const http = require('http');
const path = require('path');
const sourcecodeRouter = require('./routes/sourcecode.router');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/source_code/codemirror5', express.static(path.join(__dirname, 'codemirror5')));
app.use('/source_code', sourcecodeRouter);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});