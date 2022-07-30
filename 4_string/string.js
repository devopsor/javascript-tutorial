//strings in JavaScript are represented by characters enclosed in ''
var x = 'Hello, world1';
console.log(x);
// or strings in JavaScript are represented by characters enclosed in ""
var x = "Hello, world2";
console.log(x);
// If 'it is also a character, it can be ""enclosed in brackets
var x = "I'm OK"
console.log(x);
//  if the string contains both inside 'and "out? Escape characters can be used \ to identify
var x = "'I\'m \"OK\"!';";
console.log(x);
// ASCII characters can be represented in the \x##form of hexadecimal
var x ='\x41';
console.log(x);
// \u#### represent a Unicode character
var x ='\u0064\u0064';
console.log(x);
// output the string having multiple lines
var x =`this is 
multiple line
string`;
console.log(x);
// add two strings, the result will be a string concatenation
var x = "1"; 
var y = "2";
var z = x + y;
console.log(z);
// add a string and a number, the result will be a string concatenation:
var x = "1"; 
var y = 2;
var z = x + y;
console.log(z);
// add a number and a string, the result will be a string concatenation:
var x = 1 
var y = "2";
var z = x + y;
console.log(z);
// add a number, a string and a number, the result will be a string concatenation:
var x = 1 
var y = "2";
var z = 4;
console.log("The result is: " + x + y + z);
//get the length of string
var x = 'single line test';
console.log(x.length);
//get a character at a specified position in a string, use an Array-like subscripting operation, where the index number starts from 0:
var x = 'Hello, world!';
console.log(x[0]); // 'H'
console.log(x[7]); // 'w'
console.log(x[12]); // '!'
// strings are immutable. If you assign an index to a string, there will be no error, but it will have no effect
var x = 'Test';
x[1] = 'X';
console.log(x); // '!'
// uppercase and lowercase for strings
var x = 'Hello';
x = x.toUpperCase();
console.log(x);
x = x.toLowerCase();
console.log(x);
// index of string
var x = "Hello world!";
console.log(x.indexOf("world"));
// substring of the specified index range
var x = 'Hello world!';
console.log(x.substring(1,3));
