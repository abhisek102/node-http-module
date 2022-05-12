const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('hello');
    console.log('server connected');
  } else if (req.url == '/about') {
    res.end('this is about page');
  } else {
    res.writeHead('404');
    res.end('error 404 not found');
  }
});

server.listen(8000);
