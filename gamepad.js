const GamePad = require('node-gamepad');
const config = require('./config');

const { productID, vendorID } = config.gamepad;
const controller = new GamePad( 'snes/retrolink', {
  productID,
  vendorID,
});

const EventEmitter = require('events');

class Gamepad extends EventEmitter {
  constructor() {
    super();

    controller.connect();
    controller.on('up:press', () => this.emit('input', 'up'));
    controller.on('down:press', () => this.emit('input', 'down'));
    controller.on('left:press', () => this.emit('input', 'left'));
    controller.on('right:press', () => this.emit('input', 'right'));

    controller.on('x:press', () => this.emit('input', 'x'));
    controller.on('y:press', () => this.emit('input', 'y'));
    controller.on('a:press', () => this.emit('input', 'a'));
    controller.on('b:press', () => this.emit('input', 'b'));
    controller.on('l:press', () => this.emit('input', 'l'));
    controller.on('r:press', () => this.emit('input', 'r'));

    controller.on('start:press', () => this.emit('input', 'start'));
    controller.on('select:press', () => this.emit('input', 'select'));
  }
}

module.exports = Gamepad;

