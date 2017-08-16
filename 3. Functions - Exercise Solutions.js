// Create a Math.min function (min)
function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

//Create recursive isEven function (boiling numbers down to 0 or 1) to test on 50 & 75;
// Add functionality for negative numbers
function isEven(num) {
	if (num === 0) {
	  return true;
	} else if (num === 1) {
	  return false;
	} else {
	  if (num > 0) {
	  	return isEven(num - 2);
	  } else {
	  	return isEven(num + 2);
	  }
	}
}

// Bean counting; create a function that counts uppercase Bs in a string.  Create a new function (that takes two arguments) that counts the number of a given character in a string
// Use the second function to re-write the first;
function countBs(string) {
	var count = 0;
	for (var position = 0; position < string.length; position ++) {
      string.charAt(position) === 'B' ? count += 1 : count = count;
	}
	return count;
}

function countChar(string, char) {
	var count = 0;
	for (var position = 0; position < string.length; position++) {
		string.charAt(position) === char ? count += 1 : count = count;
	}
	return count;
}

// countBs using the countChar function
function countBs(string) {
	return countChar(string, 'B');
}