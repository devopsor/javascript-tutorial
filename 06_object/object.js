// Object
// A JavaScript object is an unordered collection data type that consists of several key-value pairs.
var james = {
  name: 'james',
  birth: 1990,
  school: 'No.1 Middle School',
  height: 1.70,
  weight: 65,
  score:99,
};
// {name: 'james', birth: 1990, school: 'No.1 Middle School', height: 1.7, weight: 65, …}
console.log(james); 
console.log(james.score); 
console.log(james.height); 
console.log('\n');

// middle-school is not a valid variable and needs to be ''enclosed in parentheses. 
// Operators. cannot be used to access this property either , it must be used to access:['xxx']
var james = {
  name: 'james',
  'middle-school': 'No.1 Middle School'
};
console.log(james); 
console.log(james.name);
console.log(james['name']);
console.log(james['middle-school']);
// JavaScript stipulates that accessing non-existing properties does not report an error, but returns undefined
console.log(james['age']);
console.log('\n');

// JavaScript objects are dynamically typed, you can freely add or remove properties from an object:
var james = {
  name: 'James'
};
console.log(james.age);       // undefined
james.age = 18;                   // add a new property
console.log(james.age);       // 18
delete james.age;                 // delete property age
console.log(james.age);       // undefined
delete james['name'];           // delete property name 
console.log(james.name);    // undefined
delete james.school;            // error does not occur when deleting not exist property
console.log('\n');

// check if james have a property, we can use [in] the operator:
var james = {
  name: 'james',
  birth: 1990,
  school: 'No.1 Middle School',
  height: 1.70,
  weight: 65,
  score: null
};
console.log('name' in james); // true
console.log('grade' in james); // false
// toString is inherited from Object
console.log('toString' in james); // true
console.log('\n');

// check the property belongs to itself
var james = {
  name: 42
};
console.log(james.hasOwnProperty('name'));   //true
console.log(james.hasOwnProperty('toString'));  //false
console.log(james.hasOwnProperty('hasOwnProperty'));  //false
