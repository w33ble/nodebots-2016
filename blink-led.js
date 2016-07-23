const bootup = require('./bootup');

bootup().then(({ five }) => {
  const led12 = new five.Led(12);
  const led13 = new five.Led(13);
  const delay = 500;

  setTimeout(() => led12.blink(delay), delay);
  led13.blink(delay);
});