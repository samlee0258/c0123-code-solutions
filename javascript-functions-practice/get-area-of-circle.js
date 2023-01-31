/* exported getAreaOfCircle */
/*
  - create a function named getAreaOfCircle with one parameter "radius"
  - multiply the radius with the radius then with the result of that expression
  multiply by pi and assign the result of that expression to a variable
  - return the value of the variable
*/

function getAreaOfCircle(radius) {
  var area = (radius * radius) * Math.PI;
  return area;
}
