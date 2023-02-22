function ExampleConstructor() {

}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('value of example:', example);
console.log('typeof example:', typeof example);

console.log('value of example.__proto__:', example.__proto__);
console.log('typeof example.__proto__:', typeof example.__proto__);

var instance = example instanceof ExampleConstructor;
console.log('value of instance:', instance);
console.log('typeof instance:', typeof instance);
