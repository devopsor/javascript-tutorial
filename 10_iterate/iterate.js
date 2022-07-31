// Iterable
// traverse Array can use loop, traversal Map sum Set cannot use subscript. 
// to unify collection types, the ES6 standard introduces new iterable types, Array, Map and Set .
// iterable collections with types can for ... of be traversed with a new loop
// for ... of loop is a new syntax introduced by ES6, please test if your browser supports it:

// Use a for ... of loop to iterate over the collection, use the following:
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // traverse array
    console.log(x);
}
for (var x of s) { // traverse set
    console.log(x);
}
for (var x of m) { // traverse map
    console.log(x[0] + '=' + x[1]);
}
console.log('\n');

// You may be wondering, what is the difference between a for ... of loop and for ... in a loop.
// for ... in 
// The loop is actually traversing the property names of the object due to historical issues. 
// An Array is actually an object too, and the index of each element of it is treated as a property.
// When we manually Arrayadd extra properties to the object, the for ... in loop will bring unexpected unexpected effects:
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
console.log('\n');

// for ... of 
// Looping fixes these problems completely, it just loops over the elements of the collection itself:
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}
// That's why a new for ... of loop is introduced.
console.log('\n');

// However, a better way is to use iterablethe built-in forEachmethod directly, 
// which takes a function and automatically calls it back on each iteration. Take for Array example:
var a = ['A', 'B', 'C'];
a.forEach(function (element, index) {
  // element: current element
  // index: current index
  console.log(element + ', index = ' + index);
});
console.log('\n');
// the other usage of forEach method
a.forEach((element, index) => {
  // element: current element
  // index: current index
  console.log(element + ', index = ' + index);
});
console.log('\n');

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, index) {
  // element: current element
  // index: current index
  console.log(element + ', index = ' + index);
});
console.log('\n');
// the other usage of forEach method
s.forEach((element, index) => {
  // element: current element
  // index: current index
  console.log(element + ', index = ' + index);
});
console.log('\n');

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (element, index) {
  // element: current element
  // index: current index
  console.log(element + ', index = ' + index);
});
console.log('\n');
// the other usage of forEach method
m.forEach((element, index) => {
  // element: current element
  // index: current index
  console.log(element + ', index = ' + index);
});
console.log('\n');

// Note that the forEach()method is introduced by the ES5.1 standard, you need to test whether the browser supports it.
// Setis Arraysimilar to, but Set without the index, so the first two arguments to the callback function are the elements themselves:
var s = new Set(['A1', 'B1', 'C1']);
s.forEach(function (element) {
    console.log(element);
});
s.forEach((element) => {
  console.log(element);
});
console.log('\n');

// MapThe callback function parameters of , in order value, keyand map themselves:
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
// If some parameters are not of interest, they can be ignored 
// since JavaScript's function calls do not require the parameters to be consistent. 
// For example , just get Array:element
m.forEach((value) => {
  console.log(value);
});