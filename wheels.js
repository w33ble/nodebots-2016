module.exports = (five) => {
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

    spinLeft(speed) {
      wheels.left.ccw(speed);
      wheels.right.ccw(speed);
    },

    spinRight(speed) {
      wheels.left.cw(speed);
      wheels.right.cw(speed);
    },

    stop() {
      wheels.left.stop();
      wheels.right.stop();
    }
  };

  return wheels;
});