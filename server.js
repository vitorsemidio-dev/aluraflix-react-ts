/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const jsonServer = require('json-server');

const server = jsonServer.create();
// const router = jsonServer.router('db.json');
const router = jsonServer.router('emidio.json');
// const router = jsonServer.router('nathflix.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
