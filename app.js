const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  switch (request.url) {
    case '/':
      response.end(fs.readFileSync(__dirname + '/index.html'));
      break;
    case '/env':
      response.end(JSON.stringify(process.env));
      break;
    default:
      response.writeHead(404);
      response.end(fs.readFileSync(__dirname + '/not-found.html'));
      break;
  }
});

app.listen(8080);
