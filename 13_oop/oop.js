// All data in JavaScript can be seen as objects, so are we already using object-oriented programming?

// of course not. If we only use Number, Array, stringand basic {...} defined objects, 
// the power of object-oriented programming cannot be exerted.

// Object-oriented programming in JavaScript is not the same as object-oriented programming 
// in most other languages ​​such as Java and C#. If you are familiar with Java or C#, well, you must 
// understand two basic concepts of object orientation:

// Class: A class is a type template of an object, for example, a Student class is defined to represent 
// a student, and the class itself is a type that Student represents the student type, but does not represent 
// any specific student;

// Instance: An instance is an object created according to a class. 
// For example, multiple instances of , , , etc. Student can be created according to the class . 
// Each instance represents a specific student, and they all belong to the type Student

// So, classes and instances are fundamental concepts in most object-oriented programming languages.

// However, in JavaScript, this concept needs to be changed. JavaScript does not distinguish between 
// the concept of class and instance, but through the prototype (prototype) to achieve object-oriented programming.

// A prototype is when we want to create simon this specific student, we don't have a Student type available. 
// What to do then? There happens to be such a ready-made object:
var Student  = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var simon = {
    name:'Simon'
}

simon.__proto__ = Student;
console.log(simon.name);  //Simon
simon.run();  // Simon is running...

// Note that the last line of code simon points the prototype to the object Student, 
// which looks simon was inherited from Student:

// simon Has its own name properties, but does not define run() methods. 
// However, since simon is inherited from Student, as long as Student has a run() method, Simon can also call it.

// The difference between JavaScript's prototype chain and Java's Class is that 
// it does not have the concept of "Class", all objects are instances, and the so-called inheritance relationship 
// is just to point the prototype of one object to another object.

// If simon points the prototype to another object:
var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

simon.__proto__ = Bird;
console.log(simon.name);  //Simon
// simon.run();  // Uncaught TypeError TypeError: simon.run is not a function
simon.fly();  // Simon is flying...

// You can make simon slaves Student into Bird, or into, any object while the JavaScript code is running.

// Note that the above code is for demonstration purposes only. 
// When writing JavaScript code, do not directly obj.__proto__use to change the prototype of an object, 
// and lower versions of IE cannot be used __proto__. Object.create() Methods can pass in a prototype 
// object and create a new object based on that prototype, but the new object has no properties, 
// so we can write a function to create simon:

// prototype:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // Create a new object based on the Student prototype:
    var s = Object.create(Student);
    // Initialize a new object:
    s.name = name;
    return s;
}

var simon = createStudent('Simon');
simon.run(); // simon is running...
simon.__proto__ === Student; // true

// This is one way to create prototypal inheritance, and JavaScript has other ways to create objects, 
// which we'll discuss later.

/////////////////////////////////////////////////////Constructor///////////////////////////////////////////////////////////////////////

// In addition to { ... } creating an object directly, JavaScript can also use a constructor method to create objects.
//  Its usage is to define a constructor first:
function Teacher(name) {
    this.name = name;
    this.hello = function () {
        return ('Hello, ' + this.name + '!');
    }
}
var simon = new Teacher('Simon');
console.log(simon.name); // Simon
console.log(simon.hello()); // Hello, Simon!

// The new Teacher() object created with also gets a constructor property from the prototype, 
// which points to the function Teacher itself:
console.log(simon.constructor === Teacher.prototype.constructor); // true
console.log(Teacher.prototype.constructor === Teacher); // true

console.log(Object.getPrototypeOf(simon) === Teacher.prototype); // true

console.log(simon instanceof Teacher); // true

// Finally, we can also write a function that encapsulates all the operations createAdmin() inside . 
//  new A common programming pattern looks like this:
function Admin(props) {
    this.name = props.name || 'anonymous'; //  default is anonymous
    this.grade = props.grade || 1; // default 1
}

Admin.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createAdmin(props) {
    return new Admin(props || {})
}

// This createAdmin() function has several huge advantages: 
// one is that it does not need new to be called, 
// and the other is that the parameters are very flexible, you can either not pass it or pass it like this:
var simon = createAdmin({
    name: 'Simon'
});

console.log(simon.grade); // 1