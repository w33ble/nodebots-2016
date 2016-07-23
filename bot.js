const bootup = require('./bootup');
const initWheels = require('./wheels');
const initWheelsMock = require('./mock-wheels');
const Gamepad = require('./gamepad');

const mode = 'kill'; // set to kill to activiate

const gamepad = new Gamepad();
const speedMultiplier = .2;

function bot() {
  if (mode === 'kill') return bootup();
  return Promise.resolve({ five: false });
}

bot()
.then(({ five }) => {
  let wheels;
  if (mode === 'test') wheels = initWheelsMock(five);
  if (mode !== 'test') wheels = initWheels(five);

  const state = {
    speed: 0,
    command: 'forward',
  };

  function getSpeed(type, forceForward) {
    console.log('forceForward', forceForward, state);
    let speed;

    if (type === 'low') speed = (0.3 * speedMultiplier);
    else if (type === 'high') speed = (1 * speedMultiplier);
    else speed = state.speed;

    speed *= (!forceForward && state.speed < 0) ? -1 : 1;
    return speed;
  }

  function move() {
    console.log('move', state);
    if (state.command)
      wheels[state.command](state.speed);
  }

  function stop() {
    state.speed = 0;
    wheels.stop();
    console.log('stop!', state);
  }

  console.log('BOT ARMED');
  move();

  console.log('GAMEPAD READY!')
  gamepad.on('press', (button) => {
    if (button === 'A') return stop();

    if (button === 'X') state.speed = state.speed * -1;

    if (button === 'B') state.speed = getSpeed('low');
    if (button === 'Y') state.speed = getSpeed('high');

    if (button === 'L') state.command = 'spinLeft';
    if (button === 'R') state.command = 'spinRight';
    if (button === 'left') state.command = 'left';
    if (button === 'right') state.command = 'right';

    if (button === 'up') {
      const speed = (state.speed !== 0) ? state.speed : 'high';
      state.speed = getSpeed(speed, true);
      state.command = 'forward';
    }
    if (button === 'down') {
      const speed = (state.speed !== 0) ? state.speed : 'high';
      state.speed = getSpeed(speed, true);
      state.command = 'backward';
    }

    move()
  });

  // Release doesn't seem to trigger :(
  // gamepad.on('release', (button) => {
  //   if (button === 'up') {
  //     state.speed = 0;
  //   }
  //   if (button === 'down') {
  //     state.speed = 0;
  //   }
  // });
});