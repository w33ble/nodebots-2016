module.exports = () => {
  console.log('Initialize wheels');
  const wheels = {};

  wheels.left = {
    cw(speed) { console.log('LEFT', 'CW', speed) },
    ccw(speed) { console.log('LEFT', 'CCW', speed) },
    stop() { console.log('LEFT', 'STOP') },
  }

  wheels.right = {
    cw(speed) { console.log('RIGHT', 'CW', speed) },
    ccw(speed) { console.log('RIGHT', 'CCW', speed) },
    stop() { console.log('RIGHT', 'STOP') },
  }

  return {
    forward(speed) {
      wheels.left.cw(speed);
      wheels.right.ccw(speed);
    },

    backward(speed) {
      wheels.left.ccw(speed);
      wheels.right.cw(speed);
    },

    left(speed) {
      wheels.left.cw(speed);
      wheels.right.ccw(speed / 2);
    },

    right(speed) {
      wheels.left.cw(speed / 2);
      wheels.right.ccw(speed);
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
}