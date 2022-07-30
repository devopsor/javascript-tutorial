// conditional judgments
// JavaScript is used if () { ... } else { ... }to make conditional judgments
var age = 20;
if (age >= 18) { 
    console.log('adult');
} else { 
    console.log('teenager');
}
console.log('\n');

// where elsestatement is optional. If the statement block contains only one statement, it can be omitted {}
var age = 16;
if (age >= 18)
    console.log('adult');
else
    console.log('teenager');
console.log('\n');

// The danger of omission {} is that if you want to add some statements later, 
// but forget to write them {}, you change the if...else...semantics, for example
var age = 20;
if (age >= 18)
    console.log('adult');
else
    console.log('age < 18'); 
    console.log('teenager'); // this statement is not in else scope
console.log('\n');


  var age = 20;
  if (age >= 18) {
      console.log('adult');
  } else {
      console.log('age < 18');
      console.log('teenager');
  }
  console.log('\n');

// Multi-line conditional judgment
  var age = 3;
if (age >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}
console.log('\n');

var age = 3;
if (age >= 18) {
    console.log('adult');
} else {
    if (age >= 6) {
        console.log('teenager');
    } else {
        console.log('kid');
    }
}
console.log('\n');

// if a certain condition is satisfied, the subsequent judgment will not be continued.
if (age >= 6) {
  console.log('teenager');
} else if (age >= 18) {
  console.log('adult');
} else {
  console.log('kid');
}
console.log('\n');

// JavaScript treats null, undefined, 0, NaNand empty strings ''as falseall other values true
var x = '123';
if (x.length) { 
    console.log(x);
}

