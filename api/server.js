const Hapi = require('@hapi/hapi');
const inert = require('@hapi/inert');
const route = require('./route.js');

const init = async () => {
  const server = Hapi.server({
    port:process.env.PORT,
    host: process.env.VERCEL_URL ,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(inert);

  server.route(route);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
