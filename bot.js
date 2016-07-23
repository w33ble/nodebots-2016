const bootup = require('./bootup');
const wheels = require('./wheels');
const Gamepad = require('./gamepad');

const gamepad = new Gamepad();

bootup()
.then(({ five, board }) => {
  const state = {};



  gamepad.on('input', (button) => {

  })
});