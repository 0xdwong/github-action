require('dotenv').config();
const logger = require("./utils/logger");
const app = require('./koa');
const PORT = process.env.PORT || 3189;


process.on('uncaughtException', (err, origin) => {
  logger.error(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

function createServer() {
    const server = app.listen(PORT, () => {
      logger.info("HTTP Listening on port:", server.address().port);
    });
}


function start() {
  createServer();
}

start();

