'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

// look up on json server docs


router.render = (request, response) => {
  response.jsonp({
    results: response.locals.data,
  })
}

server.use(router);
server.use(middleware);

server.listen(3000, () => {
  console.log('json server awaiting requests');
})