//////////////////////////////////////////////// typeof//////////////////////////////////////////////////////

// In the JavaScript world, everything is an object.
// But some objects are still not quite the same as others. 
// To distinguish the type of an object, we use typeof the operator to get the type of the object, 
// which always returns a string
console.log(typeof 123); // 'number'
console.log(typeof NaN); // 'number'
console.log(typeof 'str'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Math.abs); // 'function'
console.log(typeof null); // 'object'
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
console.log('\n');
// It can be seen that number, string, boolean, functionand undefined are different from other types. 
// The type of special attention null is object
// Array the type of is also object, if we use it, typeof will not be able to distinguish it from the object null,[], {}


///////////////////////////////////////////////Wrapper Object//////////////////////////////////////////////////////
// In addition to these types, JavaScript also provides wrapper objects, 
// and those familiar with Java must be well aware of the relationship of int and Integer 
console.log(typeof new Number(123)); // 'object'
console.log(new Number(123)=== 123); // false

console.log(typeof new Boolean(true)); // 'object'
console.log(new Boolean(true) === true); // false

console.log(typeof new String('str')); // 'object'
console.log(new String('str') === 'str'); // false
console.log('\n');

var n = Number('123'); // 123
console.log(n); // 123
console.log(n===123); // true
console.log(typeof n); // 'number'
console.log('\n');

var b = Boolean('true'); 
console.log(b);// true
console.log(b===true);// true
var b3 = Boolean('');
console.log(b3); // false
console.log(b3===false);// true
console.log('\n');

var b2 = Boolean('false');
console.log(b2); // true  'false' is tranformed from string to boolean true.
var b3 = Boolean('')
console.log(b3); // false

var s = String(123.45); // '123.45'
console.log(typeof s); // 'string'



// To summarize, there are a few rules to follow:

// Do not use new Number(), new Boolean(), to new String()create wrapper objects;
// Use parseInt() or parseFloat() to convert any type to number;
// Used toString() convert any type to string, or directly call a toString() method of an object;
// Usually it is not necessary to convert any type to booleanre-judgment, 
// because it can be written directly if (myVar) {...};
// typeof The operator can determine number, boolean, string, functionand undefined;
// judge Array to use Array.isArray(arr);
// Judge null please use myVar === null;
// Determine whether a global variable exists or not typeof window.myVar === 'undefined';
// Inside the function, it is used to determine whether a variable exists typeof myVar === 'undefined'.
// Finally, a careful classmate pointed out that any object has a toString() method? 
// null and undefined there is no! It does, except for these two special values, albeit null disguised as object types.
// More careful students pointed out that the number object call toString() reported SyntaxError:
// 123.toString(); // SyntaxError

// In this case, special treatment is required:
console.log(123..toString()); // '123', Note the two dots!
console.log((123).toString()); // '123'
