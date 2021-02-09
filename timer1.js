// input is an array of the elements offered into the command line
let input = process.argv.slice(2);

// loops through the input
// i becomes each element of input
// checks if negative or NaN, if either, doesn't beep
//beeps if input is only a number
//delay is time in seconds input to command line, takes in multiple inputs


const timer = (input) => {
  for (i of input) {
    if (Math.sign(i) !== -1 && isNaN(i) !== true) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, i * 1000);
  }
  }
};

timer(input);