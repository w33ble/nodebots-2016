const net = require('net');
const five = require('johnny-five');

const socketHost = 'ESPxxxxxx.local';

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

board.on('ready', () => {
  const led = new five.Led(13);
  led.blink(500);
});