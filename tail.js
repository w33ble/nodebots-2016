module.exports = (five) => {
  console.log('Initialize tail');
  if (five !== false) {
    const tail = new five.Servo({
      pin: 14,
      type: 'standard',
      center: true,
      startAt: 120,
    })
    // const tail = new five.Servo(11)
    .sweep({
      range: [75, 120],
      interval: 1000,
      step: 15,
    });
  }
}