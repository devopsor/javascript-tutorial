'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hi(name) {
    console.log('Hi, ' + name + '!');
}

function goodbye(name) {
    console.log('Goodbye, ' + name + '!');
}

// CommonJS specification
// This module loading mechanism is known as the CommonJS specification. 
// Under this specification, each .js file is a module, and the variable names and function names used 
// within them do not conflict with each other. For example, hello.js and main.js both declare global variables 
// var s = 'xxx', but do not affect each other.
module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye
};