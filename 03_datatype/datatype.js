// A number
var x = 1;
console.log(x);

// A number with decimals
var x = 3.14;
console.log(x);

// A number with exponent
var x = 123e-5;
console.log(x);

// integers (numbers without a period or exponent notation) are accurate up to 15 digits.
var x = 999999999999999;
console.log(x);

//9999999999999999 will be 10000000000000000
var x = 9999999999999999;
console.log(x);

// add two numbers, the result will be a number
var x = 3.14
var y = 3.12;
console.log(x+y);

// boolean value,a boolean value has only two values true, falseeither true
var x = true;
var y = false;
console.log(x);        // true
console.log(y);        // false
console.log(2>1);    // true
console.log(2>=3);  // false

// and operation &&
// the operation is an AND operation, and only if all are true, the &&result of the operation is true
console.log(true && true);                 // true
console.log(true && false);                // false
console.log(true && false && true);   // false

// or operation || 
// the operation is an OR operation, and as long as one of them is true, the ||result of the operation is true
console.log(true || true);                  // true
console.log(true ||  false );              // true
console.log(true || false ||  true);      // true
console.log(true || false &&  true);   // true

// not opreation !
// the operation is not operation, it is a unary operator that turns trueinto false, falsebecomes true 
console.log(!true);
console.log(!false);

// boolean values ​​are often used in conditional judgments, such as:
var age = 15;
if (age >= 18) {
    console.log('adult');
} else {
    console.log('teenager');
}

// comparison operator
// when we compare Numbers, we can get a boolean value through the comparison operator:
console.log(2 > 5); // false
console.log(5 >= 2); // true
console.log(7 == 7); // true
console.log("\n"); 
// in fact, JavaScript allows comparisons of arbitrary data types:
// == Comparison, 
// it will automatically convert the data type and then compare, in many cases, it will get very strange results
console.log(false == 0); // true
console.log(false == 1); // false
console.log(true == 2); // false
console.log(true == 1); // true
console.log('string' == "string"); // true
console.log("\n"); 
// === comparison, 
// does not automatically convert data types. If the data types are inconsistent, return falsethem. If they are consistent, compare them again
console.log(false === 1); // false
console.log(false === 0); // false
console.log(false === true); // false
console.log(false === false); // true
console.log(true === true); // true
console.log(1 === 1); // false
console.log(1 === '1'); // false
// because of this design flaw in JavaScript, don't use ==comparisons, always stick to ===comparisons.
console.log("\n"); 

// another exception is NaNthat this particular Number is not equal to all other values, including itself:
console.log(NaN == NaN);   //false
console.log(NaN === NaN);   //false
console.log(isNaN(NaN));   //true
console.log("\n"); 


// the equality comparison of floating-point numbers
console.log(1 / 3 === (1 - 2 / 3));  //false
console.log("\n"); 

// floating-point numbers cause errors in arithmetic because computers cannot accurately represent infinitely recurring decimals
// to compare two floating point numbers for equality, you can only compute the absolute value of their difference to see if it is less than a certain threshold
console.log(Math.abs(1 / 3 - (1 - 2 / 3))); 
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001);  //true
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000000000000001);  //true
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.00000000000000001);  //false

// null and undefined
// null represents an "empty" value, which is different from the 0 
// empty string and is a numeric value, representing a string of length 0, and means "empty".''0''null
console.log(null);
console.log(undefined);
console.log(''.length);
console.log("\n"); 

// array
// The following array contains 6 elements. Arrays are represented by a delimiter []between elements
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[6]);
console.log("\n"); 

// Another way to create an array is through a Array() function
var arr = new Array(1, 2, 3); 
console.log(arr[0]);
console.log(arr[3]);
console.log("\n"); 

// object
// An object in JavaScript is an unordered collection of key-values, for example
var person = {
  name: 'Bob',
  age: 20,
  tags: ['js', 'web', 'mobile'],
  city: 'Beijing',
  hasCar: true,
  zipcode: null
};
// The keys of JavaScript objects are all strings, and the values ​​can be any data type
console.log(person.name);
console.log(person.tags);
console.log(person.zipcode);
console.log("\n"); 

/// variable
var xx;
var $y;
console.log(xx);
console.log($y);
$y = 2;
console.log($y);
console.log("\n"); 

// it should be noted that it can only be vardeclared once, for example:
var a = 123;   //123
console.log(a);
a = 'ABC';    //ABC
console.log(a);
console.log("\n"); 

var x = 10;
x = x + 2;
console.log(x);
console.log("\n"); 

// strict mode
// At the beginning of JavaScript's design, in order to facilitate beginners to learn, it is not mandatory to vardeclare variables
// This design error has serious consequences: if a variable varis used without a declaration, the variable is automatically declared as a global variable:
i = 10;
console.log(i);
console.log("\n"); 

// In different JavaScript files on the same page, if they do not need to vardeclare, they just use variables i, 
// which will cause the variables ito affect each other, resulting in erroneous results that are difficult to debug.

// Undeclared varvariables are treated as global variables. To avoid this pitfall, all JavaScript code should use strict mode. 
// The JavaScript code we write later will all be in strict mode
'use strict';
// If the browser supports strict mode, The following code will raise a ReferenceError:
abc = 'Hello, world';
console.log(abc);
