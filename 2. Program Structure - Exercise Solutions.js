// 1. Looping through a triangle:
// Original Solution
for (var line = '#'; line.length < 8; line += '#') {
  console.log(line);
}

// 2. FizzBuzz; log numbers 1 - 100 but if a number is divisible by 3 log 'Fizz', if divisible by 5 log 'Buzz', if divisible by both log 'FizzBuzz'
// Original Solution
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Improved/Refactored Solution
for (var i = 1; i <= 100; i++) {
  var log = '';
  if (i % 3 === 0) {
    log += 'Fizz';
  }
  
  if (i % 5 === 0) {
    log += 'Buzz';
  }
  
  console.log(log || i);
}

// 3. Checker Board:Write a program that creates a string that represents an sizexsize grid, using newline characters to separate lines. At each position of the grid there is either a space or a # character
// Original Solution
var size = 8;
var checker = true;
var line = '';
for (var i = 1; i <= size * size; i++) {
  if (checker) {
    line += '#';
  } else if (!checker) {
    line += ' ';
  } 
  if (size % 2 === 0) {
    (i % size === 0) ? line += '\n' : checker = !checker;
  } else {
    checker = !checker
    if (i % size === 0) {
      line += '\n';
    }
  }
}

console.log(line);






