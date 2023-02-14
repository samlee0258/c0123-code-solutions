/* exported defaults */
/*
  - get "bar" from source and place it inside target object
  - if "foo" and "baz" exists in target ignore in source
*/

function defaults(target, source) {
  for (var key in source) {
    if (target[key] !== source[key]) {
      target[key] = source[key];
    }
  }
}
