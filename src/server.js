require('dotenv').config();

const Hapi = require('@hapi/hapi');
const music = require('./api/music');
const MusicService = require('./services/postgres/MusicService');
const MusicsValidator = require('./validator/index');

const init = async () => {
  const musicService = new MusicService();
  const server = Hapi.server({
    port: 5000,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: music,
    options: {
      service: musicService,
      validator: MusicsValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
