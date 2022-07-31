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
console.log(abs(-2));

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
console.log(abs1(-2)); 
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
foo2(1);
foo2(1, 2);
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
console.log(foo6()); // undefined
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
console.log(max1(15,20));