// THE SUM OF A RANGE
// Wtire a 'range' function that takes two arguments, 'start' and 'end' and returns an array containing all numbers from start to end
// Bonus - add a 'step' parameter to increment the stepsn in building the range
function range(start, end, step) {
	var result = [];
    step = step || 1;
	if (step > 0) {
		for (var i = start; i <= end; i += step) {
			result.push(i);
		}
	} else {
      for (var i = start; i >= end; i += step) {
      	result.push(i);
      }
	}
	return result;
}

// Write a 'sum' function to determine the sum of all the numbers in an array
function sum(array) {
	return array.reduce(function(sum, number) {
      return sum += number;
	})
}



// REVERSING AN ARRAY
// Create a function that takes an array and returns a new array with all the elements of the first in reverse order
// NOTE: this returns a new object making it a pure function
function reverseArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i ++) {
  	result.unshift(array[i]);
  }
  return result;
}

// Create a function that takes an array and returns it with all its elements in revese order
// NOTE: this mutates the original input, making it an impure function (mutation of input is a 'side effect')
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var originalValue = array[i]; // Saves the original value
    array[i] = array[array.length - 1 - i];  // Changes the original value to its corresponding end value
    array[array.length - 1 - i] = originalValue;  // Changes the corresponding end value to the original first value
  }
  return array;
}



// A LIST
// Write function 'arrayToList' that builds up a list data structure when given [1,2,3] as an argument
function arrayToList(array) {
  var result = null;
  for (var i = array.length - 1; i >= 0; i--) {
    result = prepend(array[i], result);
  }
  return result;
}

// Write a function 'listToArray' and produces an array from a list
function listToArray(list) {
  var result = [];
  for (var node = list; node /*runs until this becomes false (null/undefined)*/; node = node.rest) {
  	result.push(node.value);
  }
  /*
  The variable in the for-semicolons loop is the provided list (named 'node').  It loops until node is a falsey value (undefined/null).
  Every iteration node (the list) is reassigned to the 'rest' property value (which is the child list element).  Eventually node.rest = null,
  so the for-semicolons loop will stop running.
  */
  return result;
}

// Write helper function 'prepend' which takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(element, list) {
  return {value: element, rest: list};
}

// Write helper function 'nth' which takes a list and a number and returns the element at the given position in the list (or 'undefined' when there is no such element)
// Write this one recursively
function nth(list, number) {
  if (number === 0) {
  	return list.value;
  }	
  return nth(list.rest, number - 1)
}



// DEEP COMPARISON

































