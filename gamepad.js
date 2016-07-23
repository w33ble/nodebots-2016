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
    controller.on('up:press', () => this.emit('press', 'up'));
    controller.on('down:press', () => this.emit('press', 'down'));
    controller.on('left:press', () => this.emit('press', 'left'));
    controller.on('right:press', () => this.emit('press', 'right'));

    controller.on('up:release', () => this.emit('release', 'up'));
    controller.on('down:release', () => this.emit('release', 'down'));
    controller.on('left:release', () => this.emit('release', 'left'));
    controller.on('right:release', () => this.emit('release', 'right'));

    controller.on('x:press', () => this.emit('press', 'X'));
    controller.on('y:press', () => this.emit('press', 'Y'));
    controller.on('a:press', () => this.emit('press', 'A'));
    controller.on('b:press', () => this.emit('press', 'B'));
    controller.on('l:press', () => this.emit('press', 'L'));
    controller.on('r:press', () => this.emit('press', 'R'));

    controller.on('start:press', () => this.emit('press', 'start'));
    controller.on('select:press', () => this.emit('press', 'select'));
  }
}

module.exports = Gamepad;

