// var / const / let difference

///////////////////////////////////////////////////////////// re-declaration ///////////////////////////////////////////////
// var
var x = 0;
var x = 1; 
console.log(x) 

// let
// let x = 0;
// let x = 1; // SyntaxError: Identifier 'x' has already been declared

// const
// const x = 0;
// const x = 1; // SyntaxError: Identifier 'x' has already been declared

///////////////////////////////////////////////////////////// reassignment  ///////////////////////////////////////////////
// var
var a = 0;
a = 1; 
console.log(a) // 1

// let
let b = 0; 
b = 1;
console.log(b) // 1

// const
const c = 0;
// c = 1; // Uncaught TypeError TypeError: Assignment to constant variable.

///////////////////////////////////////////////////////////// scope  ///////////////////////////////////////////////
{
  var d = 0;
}
console.log(d); // 0
// console.log(f);   // f is not defined

{
  let e = 10;
  console.log(e);
  const f = 11;
  console.log(f);
  // var f = "d";  // Identifier 'f' has already been declared
  var d = "g";
}
// console.log(e); // e is not defined
// console.log(f); // f is not defined
// console.log(f);  //  f is not defined
console.log(d);