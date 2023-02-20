/* exported defaults */
/*
  - get "bar" from source and place it inside target object
  - if "foo" and "baz" exists in target ignore in source

  - define a function named defaults with two parameters "target" and "source"
  - create a for in loop to loop through the source object
    - if the target at key is strictly equal to undefined
      - assign source at key to target at key
*/

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
