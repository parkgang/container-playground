const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  if (request.url == '/') {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + '/index.html'));
  }
  if (request.url == '/env') {
    response.end(JSON.stringify(process.env));
  }
});

app.listen(8080);
