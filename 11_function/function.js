// function
// In JavaScript, a function is defined like this:
function abs(x) {
  if (x >= 0) {
      return x;
  } else {
      return -x;
  }
}
// The above abs() function is defined as follows:
// function indicates that this is a function definition;
// abs is the name of the function;
// (x) The parameters of the function are listed in parentheses, and multiple parameters are ,separated by;
// { ... } The code between is the function body, which can contain several statements or even no statement.

// when the statement inside the function body is executed, once it is executed return, 
// the function is executed and the result is returned. Therefore, very complex logic can be implemented inside the function 
// through conditional judgment and looping.

// If there is no returnstatement, the function will also return the result after execution, but the result is undefined.
var abs = function (x) {
  if (x >= 0) {
      return x;
  } else {
      return -x;
  }
};
console.log(abs(-2));   // 2

// Since JavaScript allows any number of parameters to be passed without affecting the call, 
// it is not a problem to pass in more parameters than are defined, although these parameters are not required inside the function:
console.log(abs(10, 'blablabla'));   // return 10
console.log(abs(-9, 'haha', 'hehe', null)); // return 9

// There is no problem with passing in fewer parameters than defined:
console.log(abs()); // return NaN

function abs1(x) {
  if (typeof x !== 'number') {
      throw 'Not a number';
  }
  if (x >= 0) {
      return x;
  } else {
      return -x;
  }
}
// console.log(abs1('2'));   // Uncaught Error Not a number
console.log(abs1(-2));   // 2
console.log('\n');

// Arguments
// JavaScript also has a free keyword argumentsthat only works inside a function and 
// always refers to all parameters passed in by the caller of the current function. arguments Similar Arraybut it's not one Array:
function foo(x) {
  console.log('x = ' + x); // 10
  for (var i=0; i<arguments.length; i++) {
      console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
  }
}
foo(10, 20, 30);  
// arg 0 = 10 
// arg 1 = 20 
// arg 2 = 30 

console.log('\n');

// With argumentsthat, you can get all the parameters passed in by the caller. 
// That is, even if the function does not define any parameters, you can still get the value of the parameter:
function abs2() {
  if (arguments.length === 0) {
      return 0;
  }
  var x = arguments[0];
  return x >= 0 ? x : -x;
}
console.log(abs2()); // 0
console.log(abs2(10)); // 10
console.log(abs2(-9)); // 9
console.log('\n');

// Rest parameter
// Since JavaScript functions are allowed to receive any number of parameters, we have to argumentsuse to get all parameters:
function foo2(a, b) {
  var i, rest = [];
  if (arguments.length > 2) {
      for (i = 2; i<arguments.length; i++) {
          rest.push(arguments[i]);
      }
  }
  console.log('a = ' + a);  
  console.log('b = ' + b);
  console.log(rest);
}
foo2(1);   // a= 1 b=undefined
foo2(1, 2);   // a=1 b=2
foo2(1,2,3);  
console.log('\n');

// The ES6 standard introduces the rest parameter, and the above function can be rewritten as:
function foo3(a, b, ...rest) {
  console.log('a = ' + a);
  console.log('b = ' + b);
  console.log(rest);
}

foo3(1, 2, 3, 4, 5);
// result:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo3(1);
// result:
// a = 1
// b = undefined
// Array []
console.log('\n');

function sum(...rest) {
  var total = 0;
  for (var arg of rest) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));   // 6
console.log(sum(1, 2, 3, 4));   // 10
console.log('\n');

// Resturn Statement
// JavaScript engine has a mechanism to automatically add semicolons at the end of lines, 
// which may lead you to a big hole in the return statement:
function foo4() {
  return { name: 'foo' };
}
console.log(foo4()); // { name: 'foo' }
console.log('\n');

// If you split the return statement into two lines:
function foo5() {
  return
      { name: 'foo' };
}
console.log(foo5()); // undefined
console.log('\n');

// Be careful , the above code actually becomes:
function foo5() {
    return                          // A semicolon is automatically added, which is equivalent to return undefined;
      { name: 'foo' };          // This line of statement has not been executed
}
console.log(foo5()); // undefined
console.log('\n');

// So the correct multi-line writing is:
function foo6() {
  return { // There is no automatic semicolon, because { means that the statement is not over yet
      name: 'foo'
  };
}
console.log(foo6()); // {name: 'foo'}
console.log('\n');

function max(a, b) {
  if (a > b) {
    return
            a;
} else {
    return
            b;
}
}
console.log(max(15,20));   // undefined
console.log('\n');

function max1(a, b) {
  if (a > b) {
    return a;
} else {
    return b;
}
}
console.log(max1(15,20));  // 20
console.log('\n');

//////////////////////////////////////////////////////////////////////Variable Scope ///////////////////////////////////////////////////////////////////////
// In JavaScript, var declared variables are actually scoped.
// If a variable is declared inside the function body, the scope of the variable is the entire function body, 
// and the variable cannot be referenced outside the function body:
function foo11() {
  var x = 1;
  x = x + 1;
  console.log(x);
}
// x = x + 2; // ReferenceError: x is not defined
foo11();     //2
console.log('\n');

//  variables with the same name inside different functions are independent of each other and do not affect each other:
function foo12() {
  var x = 2;
  x = x + 1;
  console.log(x);
}
foo12();    // 3

function bar() {
  var x = 'A';
  x = x + 'B';
  console.log(x);
}
bar();  // AB
console.log('\n');

// Since JavaScript functions can be nested, at this point, 
// the inner function can access the variables defined by the outer function, but not vice versa
function foo13() {
  var x = 1;
  function bar() {
      var y = x + 1; // bar has access to foo's variable x!
      console.log(y);
  }
  bar();  // 2
  // var z = y + 1; // ReferenceError! foo cannot access bar's variable y
}
foo13();
console.log('\n');

// What if the variable names of the inner function and the outer function have the same name? Let's test it out:
function foo14() {
  var x = 1;
  var y = 2;
  function bar() {
      var x = 'A';
      console.log('x in bar() = ' + x); // 'A'
      console.log('y in foo14() = ' + y); // 2
  }
  console.log('x in foo() = ' + x); // 1
  bar();
}
foo14();
console.log('\n');

// Local Scope
// Since JavaScript's variable scope is actually inside a function, 
// we forcannot define a variable with local scope in a statement block such as a loop:
function foo15() {
  for (var i=0; i<100; i++) {
  }
  i += 100; // variable i can still be referenced
  return i;
}
console.log(foo15());  // 200
console.log('\n');

// To address block scope, ES6 introduces new keywords letthat can be used letinstead varto declare a block scoped variable:
function foo16() {
  var sum = 0;
  for (let i=0; i<100; i++) {
      sum += i;
  }
  // SyntaxError:
  // i += 1;  // ReferenceError: i is not defined
  return sum; 
}
console.log(foo16());  //4950


// Constant
// The ES6 standard introduces new keywords constto define constants, both constwith letblock scope:
const PI = 3.14;
// PI = 3; // Assignment to constant variable.
console.log(PI); // 3.14

////////////////////////////////////////////////////////////////////// Destructurie assignment///////////////////////////////////////////////////////////////////////
var array = ['hello', 'JavaScript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];
console.log(x);  // hello
console.log(y);  //Javascript
console.log(z);  //ES6
console.log('\n');
// Now, in ES6, you can use destructuring assignment to directly assign multiple variables at the same time:
var [x, y, z] = ['hello1', 'JavaScript1', 'ES6'];
console.log(x); //hello1
console.log(y); //Javascript1
console.log(z); //ES6
console.log('\n');

let [x1, [y1, z1]] = ['hello', ['JavaScript', 'ES6']];
console.log(x1); // 'hello'
console.log(y1); // 'JavaScript'
console.log(z1); // 'ES6'
console.log('\n');

// Destructuring assignment can also ignore certain elements:
let [, , z2] = ['hello', 'JavaScript', 'ES6']; 
console.log(z2);  //ES6
console.log('\n');
let [x3,, z3] = ['hello3', 'JavaScript3', 'ES6']; 
console.log(x3);  // hello3
console.log(z3);  // ES6
console.log('\n');
// If you need to extract several properties from an object, you can also use destructuring assignment to quickly obtain 
// the specified properties of the object:
var person = {
  name1: 'James',
  age1: 20,
  gender: 'male',
  passport1: 'G-12345678',
  school: 'No.4 middle school'
};
var {name1, age1, passport1} = person;
// name = James, age = 20, passport = G-12345678
console.log('name = ' + name1 + ', age = ' + age1 + ', passport = ' + passport1); 
console.log('\n');

// When destructuring and assigning an object, you can also directly assign values ​​to nested object properties, 
// as long as the corresponding levels are consistent:
var person = {
  name2: 'James',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school',
  address2: {
      city: 'Beijing',
      street: 'No.1 Road',
      zipcode: '100001'
  }
};
var {name2, address2: {city, zip}} = person;
console.log(name2); // 'James'
console.log(city); // 'Beijing'
// console.log(zip); // undefined, because the attribute name is zipcode not zip
console.log('\n');

// Note: address is not a variable, but for city and zip to get properties of nested address objects:
// console.log(address2); // Uncaught ReferenceError: address2 is not defined

// When destructuring assignment is used to assign an object property, 
// if the corresponding property does not exist, the variable will be assigned as , 
// which is consistent with undefinedreferencing a non-existing property 
var person = {
  name3: 'James',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school'
};

// Get the passport attribute for the variable id:
let {name3, passport:id} = person;
console.log(name3); // 'James'
console.log(id); // 'G-12345678'
//Note: passport is not a variable, but to get the passport attribute for the variable id:
// console.log(passport); // Uncaught ReferenceError: passport is not defined
console.log('\n');


// Destructuring assignment can also use default values, 
// which avoids the undefinedproblem of returning non-existing properties:
var person = {
  name4: 'James',
  age: 20,
  gender: 'male',
  passport: 'G-12345678'
};
// If the person object does not have a single property, the default value is true:
var {name4, single=true} = person;
console.log(name4); // 'James'
console.log(single); // true
console.log('\n');

// Scenes to be used
// Destructuring assignment can greatly simplify code in many cases. 
// For example, to swap the values ​​of two variables xand y, without the need for temporary variables, you can write:
var x=1, y=2;
[x, y] = [y, x];
console.log('x = ' + x + ', y = ' + y );  // x = 2, y = 1

// If a function accepts an object as a parameter, 
// then destructuring can be used to bind the object's properties directly to variables. 
// For example, the following function can quickly create an Dateobject:
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
  return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
var date = buildDate({ year: 2017, month: 1, day: 1 });
console.log(date);  // Sun Jan 01 2017 00:00:00 GMT+0900
console.log('\n');

////////////////////////////////////////////////////////////////////// Method  ///////////////////////////////////////////////////////////////////////
// In JavaScript, an object is defined like this:
var person = {
  name: 'james',
  birth: 1990
};
console.log(person.name);  //james
console.log('\n');
// However, if we want james to bind a function, we can do more. For example, write a age() method that returns james age:
var person = {
  name: 'james',
  birth: 1990,
  age: function () {
      var y = new Date().getFullYear();
      return y - this.birth;
  }
};
console.log(person.age); // function person.age()
console.log(person.age()); // 32
console.log('\n');

// A function bound to an object is called a method, which is no different from a normal function, 
// but what the result if we uses a this keyword internally.
// Inside a method, this is a special variable that always points to the current object, 
// which is person this variable. So, this.birth you can get person the birth properties.
function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}
var person = {
  name: 'james',
  birth: 1990,
  age: getAge
};
console.log(person.age); // function getAge(){}
console.log(getAge()); // NaN
console.log('\n');

// How does a single call to a function getAge()return NaN? Note that we've entered a big hole in JavaScript.
// If a function in JavaScript is called this,  who does this point to?
// The answer is, it depends!
// If it is called as a method of an object, for example person.age(), 
// the function this points to the called object, that is person, this is what we expect.
// If the function is called separately, for example getAge(), at this time, the function's this pointer to the global object, ie window.
var fn = person.age(); // First get the age function of person
console.log(fn); // 32
console.log('\n');

// Sometimes, if you like refactoring, you refactor the method:
var person = {
  name: 'james',
  birth: 1990,
  age: function () {
      function getAgeFromBirth() {
          var y = new Date().getFullYear();
          return y - this.birth;
      }
      return getAgeFromBirth();
  }
};
console.log(person.age()); // NaN
console.log('\n');

// To fix this problem, we use a that variable to capture first this:
// You can use var that = this; safely define other functions inside the method, 
// instead of stacking all the statements into one method
var person = {
  name: 'james',
  birth: 1990,
  age: function () {
      var that = this; // Capture this from the very beginning inside the method
      function getAgeFromBirth() {
          var y = new Date().getFullYear();
          return y - that.birth; // use that instead of this
      }
      return getAgeFromBirth();
  }
};
console.log(person.age()); // 32
console.log('\n');

// Apply
// Although in a separate function call, depending on whether it is in strict mode, 
// this pointing to undefinedor window, we can still control this the pointing
function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}
var person = {
  name: 'james',
  birth: 1990,
  age: getAge
};
console.log(person.age()); // 32
console.log(getAge.apply(person, [])); // 32, this points to person, the parameter is empty
console.log('\n');


// Decorator
// This example produces a new function — in the variable wrapped — that can be called exactly 
// the same way as the doSomething function, and will do exactly the same thing. 
// The difference is that it will do some logging before and after the wrapped function is called:
function doLogging(name) {
  console.log('Hello, ' + name);
}
function logDecorate(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}
const wrapped = logDecorate(doLogging);
doLogging('Graham');  //Hello, Graham
// new function
wrapped('Graham');  
// Starting
// Hello, Graham
// Finished
console.log('\n');

////////////////////////////////////////////////////////////////////// Higher-Order Function  ///////////////////////////////////////////////////////////////////////
// JavaScript functions actually point to a variable. Since variables can point to functions, 
// and function parameters can receive variables, then a function can receive another function as a parameter. 
// This kind of function is called a higher-order function.
// Simple Example
var x = -5;
var y = 6;
var f = Math.abs;
function add(x, y, f) {
  return f(x) + f(y);
}
var x = add(-5, 6, Math.abs); // 11
console.log(x);

// MapReduce
function pow(x) {
  return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Since the map() method is defined in JavaScript Array, 
// we call Array the map() method, pass in our own function, and get a new one Arrayas the result:
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

// Note: map() The parameter passed in is pow the function object itself.
// You might think, no need map(), write a loop that can also calculate the result:
var f = function (x) {
  return x * x;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i=0; i<arr.length; i++) {
  result.push(f(arr[i]));
}
console.log(result);
// Yes, but, from the above loop code, we can't understand at a glance "apply f(x) to each element of Array and 
// generate a new Array with the result".
// Therefore, map() as a higher-order function, it actually abstracts the operation rules. 
//  we can not only calculate simple f(x)=x 2 , but also calculate arbitrarily complex functions, 
// such as converting Arrayall numbers into strings :
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(arr);
console.log('\n');

//Reduce
// Look at the usage of reduce. Array reduce()applies a function to this Array
// [x1, x2, x3...] This function must receive two parameters, and reduce()the result continues to 
// accumulate with the next element of the sequence. The effect is:
// [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function (x, y) {
    return x + y;
}); // 25
console.log(result);
console.log('\n');

var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579
console.log(result);
console.log('\n');


///////////////////////////////////////////////////////////////////////////Filter////////////////////////////////////////////////////////////////////////////
// Filter is also a common operation, it is used to Arrayfilter out some elements, and then return the remaining elements
// For example, in one Array, to remove the even numbers and keep only the odd numbers, one could write:
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r); // [1, 5, 9, 15]
// To Array delete the empty string in one, you can write:
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // Note: Versions below IE9 do not have the trim() method
});
console.log(r); // ['A', 'B', 'C']
console.log('\n');

// Callback
// Filter()The received callback function can actually have multiple parameters. 
// Usually we only use the first parameter, which represents Array an element. 
// The callback function can also receive two other parameters, the position of the element and the array itself:
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 'A', 'B', 'C'
    console.log(index); // 0, 1, 2
    console.log(self); // self is arr itselft
    return true;
});
console.log(r); 
console.log('\n');

// Take advantage of duplicate elements filterthat can be neatly removed :Array
var r = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var unique = [...new Set(r)];
console.log(unique); // ['apple', 'strawberry', 'banana', 'pear', 'orange']
console.log('\n');


var unique = r.filter(function(item, pos, self) {
  return self.indexOf(item) == pos;
})
console.log(unique);  // ['apple', 'strawberry', 'banana', 'pear', 'orange']
console.log('\n');

// Sorting 
// Sorting is also an algorithm that is often used in programs. 
// Whether using bubble sort or quicksort, the core of sorting is to compare the size of two elements
var result = ['Google', 'Apple', 'Microsoft'];
result.sort();
console.log(result); //  ['Apple', 'Google', 'Microsoft']
console.log('\n');

var result = ['google', 'apple', 'microsoft'];
result.sort();
console.log(result);  // ['apple', 'google', 'microsoft']


var result =[10, 20, 1, 2].sort();
// This is because Array the sort() method converts all elements to String by default and then sorts the result '10'first '2', 
// because the character '1' is smaller than '2' the ASCII code of the characte
console.log(result); // [1, 10, 2, 20] 
console.log('\n');

// Fortunately, the sort() method is also a higher-order function, 
// which can also receive a comparison function to implement custom sorting.
// To sort by numerical size, we can write:
var arr = [20, 10,  1, 2];
arr.sort(function (x, y) {return x - y});
console.log(arr); // [1, 2, 10, 20]

// If we want to sort in reverse order, we can put the larger numbers first:
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {return y - x }); 
console.log(arr); // [20, 10, 2, 1]

// By default, the sorting of strings is based on ASCII size comparison. 
// Now, we propose that sorting should ignore case and sort in alphabetical order. 
// To implement this algorithm, we don't have to make major changes to the existing code, 
// as long as we can define a case-insensitive comparison algorithm:
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); 
console.log(arr); // ['apple', 'Google', 'Microsoft']

// Finally, a friendly reminder, the sort() method will Arraybe modified directly, and the result it returns is still the current Array:
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
console.log(a1); // ['A', 'B', 'C']
console.log(a2); // ['A', 'B', 'C']
console.log(a1 === a2); // true, a1和a2是同一对象


// For arrays, in addition to map(), reduce, filter(), sort() 
// these methods can pass in a function, Array objects also provide many very useful higher-order functions.
// Every
// The method can determine whether all elements of the array meet the test conditions.
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
})); // true,Because each element satisfies s.length>0

console.log(arr.every(function (s) {
    return s.toLowerCase() === s;
})); // false, because not every element is all lowercase


//Find
// The method is used to find the first element that matches the condition,
//  if found, return this element, otherwise, return undefined:
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
})); // 'pear', Because pear is all lowercase

console.log(arr.find(function (s) {
    return s.toUpperCase() === s;
})); // undefined, because there are no all-caps elements

//FindIndex
// findIndex() And find() similar, also finds the first element that meets the condition, 
// the difference is that findIndex()it will return the index of this element, if not found, return -1:
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
})); // 1, because the index of 'pear' is 1

console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
})); // -1

//ForEach
// ForEach() And map() similarly, it also applies each element in turn to the passed function, 
// but does not return a new array. forEach() Often used to iterate over arrays, therefore, 
// the passed-in function does not need to return a value:
var arr = ['Apple', 'pear', 'orange'];
arr.forEach(console.log); // print each element in turn
// Apple 0 (3) ['Apple', 'pear', 'orange']
// pear 1 (3) ['Apple', 'pear', 'orange']
// orange 2 (3) ['Apple', 'pear', 'orange']