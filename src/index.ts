// import '@babel/polyfill';

import http from 'http';

import app from './app';

const normalizePort = (val: string) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return null;
};

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  if (typeof addr === 'string') {
    console.log(`Listening on ${port}`);
  } else if (addr) {
    console.log(`Listening on ${addr.port}`);
  } else {
    throw new Error(`unexpected`);
  }
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
