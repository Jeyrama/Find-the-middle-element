/*
As a part of this Kata, you need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:
  gimme([2, 3, 1]) => 0
  gimme([5, 10, 14]) => 1
*/


// Solution

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

// or

const gimme = function (inputArray) {
  let index = 0;
  let max = Math.max(...inputArray);
  let min = Math.min(...inputArray);
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] !== max && inputArray[i] !== min){        
      index = i;
    }
  }
  return index;
};
