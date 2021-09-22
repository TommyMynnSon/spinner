// Spinner II assignment was completed during the Spinner I assignment,
// so the functions submitted for Spinner I and Spinner II are identical
// apart from their names.
//
// This version has better commenting so that a user can easily
// set the speed of rotation and desired number of 360 degree cycles.
const spinnerTwo = () => {
  const icons = [
    '\r|   ',
    '\r/   ',
    '\r-   ',
    '\r\\   '
  ];
  // Number of 360 degree cycles.
  const desiredNumberOfCycles = 3;

  // Speed of rotation - the lower the value, faster the speed.
  const speed = 50;

  const rotationsPerCycle = 9;
  const rotations = (desiredNumberOfCycles * rotationsPerCycle % 2 === 0) ? desiredNumberOfCycles * rotationsPerCycle - 1 : desiredNumberOfCycles * rotationsPerCycle;
  const endLineTiming = speed * rotations + 25;

  let rotationCount = 0;
  let timer = -speed;

  for (let i = 0; i < icons.length; i++) {
    if (rotationCount === rotations) {
      break;
    }

    timer += speed;
    rotationCount++;

    if ((i === icons.length - 1) && (rotationCount !== rotations)) {
      i = -1;

      setTimeout(() => {
        process.stdout.write(icons[icons.length - 1]);
      }, timer);
    } else {
      setTimeout(() => {
        process.stdout.write(icons[i]);
      }, timer);
    }
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, endLineTiming);
};

spinnerTwo();