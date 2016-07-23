const bootup = require('./bootup');

function initWheels(five) {
  console.log('Initialize wheels');
  const wheels = {};

  wheels.left = new five.Servo({
    pin: 4,
    type: 'continuous'
  }).stop();

  wheels.right = new five.Servo({
    pin: 5,
    type: 'continuous'
  }).stop();

  return {
    forward(speed) {
      wheels.left.cw(speed);
      wheels.right.ccw(speed);
    },

    backward(speed) {
      wheels.left.ccw(speed);
      wheels.right.cw(speed);
    },

    stop() {
      wheels.left.stop();
      wheels.right.stop();
    }
  };
}

bootup()
.then(({ five, board }) => {
  const wheels = initWheels(five);

  console.log(Object.keys(wheels));

  //forward
  console.log('Wheels forward');
  wheels.forward(0.02);

  //stop
  // board.wait(3000, () => {
  //   console.log('Wheels stop');
  //   wheels.stop();
  // });
});