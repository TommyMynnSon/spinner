// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// ... fill in the rest yourself ...
const spinnerOne = () => {
  const icons = [
    '\r|   ',
    '\r/   ',
    '\r-   ',
    '\r\\   '
  ];

  const desiredNumberOfCycles = 1;
  const rotationsPerCycle = 9;
  const rotations = desiredNumberOfCycles * rotationsPerCycle;

  let rotationCount = 0;
  let timeDifference = 400;
  let timer = -timeDifference;

  for (let i = 0; i < icons.length; i++) {
    if (rotationCount === rotations) {
      break;
    }

    timer += timeDifference;
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
  }, 3625);
};

spinnerOne();