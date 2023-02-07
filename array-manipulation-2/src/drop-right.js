/* exported dropRight */
/*
  - define a function named dropRight with two parameters "array" and "count"
  - cut out the index numbers in the array using the slice method with 2 arguments
    array and the result of the expression array.length subtracted by count and assign
    the return for the function to a variable named shortArr
  - return shortArr
*/

function dropRight(array, count) {
  var shortArr = array.slice(array, array.length - count);
  return shortArr;
}
