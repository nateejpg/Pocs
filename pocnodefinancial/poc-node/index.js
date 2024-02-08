// $ npm start -- to start the server
// https://nodejs.org/docs/latest-v17.x/api/

const http = require(`http`);
const router = require("./router");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  router.route(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


