const net = require('net');
const five = require('johnny-five');
const config = require('./config');

const socketHost = config.board.hostname;


module.exports = () => new Promise((resolve) => {
  const socket = net.connect({
    host: socketHost,
    port: 3030,
  });

  socket.on('connect', () => {
    socket.emit('open', null);
  });

  const board = new five.Board({
    id: 'killbot',
    port: socket
  });

  board.on('ready', function () {
    console.log('Board ready!')
    resolve({
      five,
      board: this,
    })
  });

  board.on('error', (err) => {
    console.log(err);
    throw err;
  })
});
