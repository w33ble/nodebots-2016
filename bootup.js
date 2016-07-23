const net = require('net');
const five = require('johnny-five');
const boardInfo = require('./board');

const socketHost = boardInfo.hostname;

const socket = net.connect({
  host: socketHost,
  port: 3030,
});

socket.on('connect', () => {
  socket.emit('open', null);
});

const board = new five.Board({
  port: socket
});

module.exports = () => new Promise((resolve) => {
  board.on('ready', function () {
    console.log('Board ready!')
    resolve({
      five,
      board: this,
    })
  });
});
