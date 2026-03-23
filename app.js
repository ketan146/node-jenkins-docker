const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Jenkins + Docker 🚀");
});

server.listen(3000);
