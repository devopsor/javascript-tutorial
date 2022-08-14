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

////////////////////////////////////////////////Date//////////////////////////////////////////////////////

// In JavaScript, Date objects are used to represent dates and times.
// To get the current system time, use:

var now = new Date();
console.log(now); // Sun Aug 14 2022 18:15:52 GMT+0800
console.log(now.getFullYear()); // 2022, year
console.log(now.getMonth()); // 7, Month, note that the month range is 0~11, 5 means June
console.log(now.getDate()); // 14, means number 24
console.log(now.getDay()); // 0, means wednesday
console.log(now.getHours()); // 18, 24Hour system
console.log(now.getMinutes()); // 15, Minutes
console.log(now.getSeconds()); // 52, Seconds
console.log(now.getMilliseconds()); // 763, Milliseconds
console.log(now.getTime()); // 1660468552763, Timestamp as a number

// Note that the current time is the time obtained by the browser from the native operating system, 
// so it is not necessarily accurate, as the user can set the current time to any value.
// If you want to create an Dateobject specifying a date and time, you can use:
var d = new Date(2015, 6, 19, 20, 15, 30, 123);
console.log(d); // Sun Jul 19 2015 20:15:30 GMT+0800

// You may have observed a very, very pitiful place, that is, the month range of JavaScript is expressed 
// as an integer from 0 to 11, 
// 0 indicating January, 
// 1 indicating February... 
// So to indicate June, what we pass in is 5! 
// It was definitely a brainstorm for the designers of JavaScript at the time, 
// but it's impossible to fix it now.

// The month value of JavaScript Date object starts from 0, keep in mind that 
// 0=January, 1=February, 2=March, ..., 11=December.

// The second way to create a specified date and time is to parse an ISO 8601 -compliant string:
var d = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(d); // 1435146562875

// But instead of an object it returns Datea timestamp. 
// But with the timestamp it's easy to convert it to one Date:
var d = new Date(1435146562875);
console.log(d); // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
console.log(d.getMonth()); // 5

// The string passed in when using Date.parse() uses the actual month 01~12, 
// and the month value obtained by getMonth() after converting to a Date object is 0~11.

//////////////////////////////////////////////////////////////////Time zone/////////////////////////////////////////////////////////////////////////////
// The time represented by the object is always displayed in the browser's time zone, 
// but we can display both local time and adjusted UTC time:
var d = new Date(1435146562875);
console.log(d.toLocaleString()); //2015/6/24 20:49:22
console.log(d.toUTCString()); // Wed, 24 Jun 2015 11:49:22 GMT

// So how to do timezone conversion in JavaScript? 
// Actually, as long as we're passing a number timestamp of a type, we don't need to care about timezone
//  conversion. Any browser can correctly convert a timestamp to local time.

// What is a timestamp? 
// The timestamp is an auto-incrementing integer that represents the number of milliseconds 
// since the beginning of the GMT time zone at 00:00 on January 1, 1970. 
// Assuming that the time of the computer where the browser is located is accurate, no matter which 
// time zone computer in the world is in the world, the timestamp numbers they generate at the moment 
// are the same, so the timestamp can accurately represent a moment and has nothing to do with 
// the time zone.

// So, we just need to pass the timestamp, or read the timestamp from the database, 
// and let JavaScript automatically convert it to local time.


/////////////////////////////////////////////////////////////RegExp////////////////////////////////////////////////////////////////////////
// With the preparation knowledge, we can use regular expressions in JavaScript.
// JavaScript has two ways to create a regular expression:
// The first way is by /expression/writing it directly, 
// and the second way is by new RegExp('expression') 
// creating a RegExp object.
// Both ways of writing are the same:
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

console.log(re1); // /ABC\-001/
console.log(re2); // /ABC\-001/

// \\Note that if you use the second way of writing, 
// the two strings are actually one because of string escaping issues \.
// Let's first see how to determine whether the regular expression matches:
var result = /^\d{3}\-?\d{3,8}$/;
console.log(result.test('010-12345')); // true
console.log(result.test('010-1234x')); // false
console.log(result.test('01012345')); // true
// The methods of the RegExp object are test() used to test whether the given string meets the conditions.

// Split string
// Splitting strings with regular expressions is more flexible than using fixed characters, 
// see the normal splitting code:
console.log('a b   c'.split(' ')); // ['a', 'b', '', '', 'c']

// Well, consecutive spaces are not recognized, try it with regex:
console.log('a b   c'.split(/\s+/)); // ['a', 'b', 'c']

// No matter how many spaces it can be split normally. Join ,and try:
console.log('a,b, c  d'.split(/[\s\,]+/)); // ['a', 'b', 'c', 'd']

// Try again ;:
console.log('a,b;; c  d'.split(/[\s\,\;]+/)); // ['a', 'b', 'c', 'd']

// If the user enters a set of tags, remember to use a regular expression next time to convert 
// the irregular input into a correct array.

////////////////////////////////////////////////////////////////////grouping//////////////////////////////////////////////////////////////
// In addition to simply judging whether there is a match, regular expressions also have 
// the powerful function of extracting substrings. With () represents the group to be extracted (Group). 
// for example:

// ^(\d{3})-(\d{3,8})$
// Two groups are defined respectively, and the area code and local number can be extracted 
// directly from the matched string:
var result = /^(\d{3})-(\d{3,8})$/;
console.log(result.exec('010-12345')); 
// ['010-12345', '010', '12345', index: 0, input: '010-12345', groups: undefined]
console.log(result.exec('010 12345')); // null

// If groups are defined in the regular expression, substrings can be extracted RegExp using methods 
// on the object .exec()

// exec() 
// After the method is successfully matched, it will return one Array. 
// The first element is the entire string matched by the regular expression, and the following strings 
// represent the substrings that were successfully matched.
// exec() The method returns when the match fails null

// Extracting substrings is very useful. Here's a more brutal example:
var result = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
console.log(result.exec('19:05:30'));
// ['19:05:30', '19', '05', '30', index: 0, input: '19:05:30', groups: undefined]

//////////////////////////////////////////////////////////////greedy match/////////////////////////////////////////////////////////////////

// It should be noted that regular matching is greedy by default, that is, matching as many characters 
// as possible. For example, match the following numbers 0:
var result = /^(\d+)(0*)$/;
console.log(result.exec('102300')); // ['102300', '102300', '']

// Due \d+ to greedy matching, all the following ones 0 are directly matched, 
// and the result 0* can only match empty strings

// \d+ Non-greedy matching (that is, as few matches as possible) must be used to 0 
// match the following ones, and adding one ? allows \d+ non-greedy matching to be used:
var result = /^(\d+?)(0*)$/;
console.log(result.exec('102300')); // ['102300', '1023', '00', index: 0, input: '102300', groups: undefined]
console.log(result.exec('102300')); // ['1002300', '10023', '00', index: 0, input: '1002300', groups: undefined]

/////////////////////////////////////////////////////////////////Global search////////////////////////////////////////////////////////////////////
// JavaScript regular expressions also have several special flags, the most commonly used ones are 
// g global matching:
var r1 = /test/g;
// equals to :
var r2 = new RegExp('test', 'g');

// Global matching can execute the exec() method multiple times to search for a matching string. 
// When we specify g the flag, each run exec(), the regular expression itself will update the lastIndex
// property, indicating the last index that was matched last time:
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

console.log(re.exec(s)); 
// ['JavaScript', index: 0, input: 'JavaScript, VBScript, JScript and ECMAScript', groups: undefined]
console.log(re.lastIndex); // 10

console.log(re.exec(s)); 
// ['VBScript', index: 12, input: 'JavaScript, VBScript, JScript and ECMAScript', groups: undefined]
console.log(re.lastIndex); // 20

console.log(re.exec(s)); 
// ['JScript', index: 22, input: 'JavaScript, VBScript, JScript and ECMAScript', groups: undefined]
console.log(re.lastIndex); // 29

console.log(re.exec(s)); 
// ['ECMAScript', index: 34, input: 'JavaScript, VBScript, JScript and ECMAScript', groups: undefined]
console.log(re.lastIndex); // 44

console.log(re.exec(s)); // null

// Global matching is similar to searching, so it cannot be used /^...$/, as it will only match at most once.

// Regular expressions can also specify i flags to ignore case, and m flags to perform multi-line matching.

////////////////////////////////////////////////////////////////Summary//////////////////////////////////////////////////////////////////
// Regular expressions are so powerful that it would be impossible to cover them in a short section. 
// To explain all the content of regular, you can write a thick book. If you often encounter regular 
// expressions problems, you may need a regular expression reference book.



////////////////////////////////////////////////////////////////JSON//////////////////////////////////////////////////////////////////
// JSON is short for JavaScript Object Notation, which is a data interchange format.
// Before JSON, people used XML to communicate data. Because XML is a plain text format, 
// it is suitable for exchanging data over the network. XML itself is not complicated, but after adding 
// a lot of complex specifications such as DTD, XSD, XPath, XSLT, any normal software developer 
// will feel a big headache when encountering XML. In the end, everyone finds that even if you study hard months, 
// and may not be able to figure out the specification of XML.

// Finally, one day in 2002, Douglas Crockford invented JSON, an ultra-lightweight data, in order to save a software engineer 
// who was in deep trouble and was fooled by some giant software companies for a long time. exchange format.

// Douglas has been a senior architect at Yahoo for a long time, and naturally loves JavaScript. 
// The JSON he designed is actually a subset of JavaScript. In JSON, there are a total of several data types:

// number: exactly the same as JavaScript ;
// boolean: is the true or of JavaScript false;
// string: is JavaScript string;
// null: is JavaScript null;
// ArrayArray: is the representation of JavaScript—— [];
// object: is the { ... } representation of JavaScript.
// and any combination of the above.

// Moreover, JSON has also determined that the character set must be UTF-8, 
// so there is no problem in representing multiple languages. For unified parsing, JSON strings must use double quotation marks "", 
// and Object keys must also use double quotation marks "".

// Because of its simplicity, JSON quickly took the Web world by storm and became an ECMA standard. 
// Almost all programming languages ​​have libraries for parsing JSON, and in JavaScript, we can use JSON directly because 
// JavaScript has built-in JSON parsing.

// Turning any JavaScript object into JSON is to serialize the object into a JSON-formatted string so that it can be passed to 
// other computers over the network.

// If we receive a string in JSON format, we just need to deserialize it into a JavaScript object, and we can use this object directly 
// in JavaScript.

////////////////////////////////////////////////////////////////////////////////Serialization/////////////////////////////////////////
'use strict';

var simon = {
    name: 'simon',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(simon);
console.log(s);

// {"name":"simon","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}

// To make the output look better, you can add parameters and output according to indentation:
console.log(JSON.stringify(simon, null, '  '));

// {
//     "name": "simon",
//     "age": 14,
//     "gender": true,
//     "height": 1.65,
//     "grade": null,
//     "middle-school": "\"W3C\" Middle School",
//     "skills": [
//       "JavaScript",
//       "Java",
//       "Python",
//       "Lisp"
//     ]
//   }

// The second parameter is used to control how to filter the key value of the object. 
// If we only want to output the specified attribute, we can pass in Array:
console.log(JSON.stringify(simon, ['name', 'skills'], '  '));
// {
//     "name": "simon",
//     "skills": [
//       "JavaScript",
//       "Java",
//       "Python",
//       "Lisp"
//     ]
//   }

// You can also pass in a function, so that each key-value pair of the object will be processed first by the function:
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

console.log(JSON.stringify(simon, convert, '  '));

// {
//     "name": "SIMON",
//     "age": 14,
//     "gender": true,
//     "height": 1.65,
//     "grade": null,
//     "middle-school": "\"W3C\" MIDDLE SCHOOL",
//     "skills": [
//       "JAVASCRIPT",
//       "JAVA",
//       "PYTHON",
//       "LISP"
//     ]
//   }

// If we also want to precisely control how to serialize Silmon, we can define Silmon  a toJSON() method that directly returns
//  the data that should be serialized by JSON:
var simon = {
    name: 'simon',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // only output name and age, and change the value of key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

console.log(JSON.stringify(simon)); // '{"Name":"simon","Age":14}'


////////////////////////////////////////////////////////////////////Deserialize////////////////////////////////////////////////////////////////////////
// Get a string in JSON format, we directly use JSON.parse()it to turn it into a JavaScript object:
console.log(JSON.parse('[1,2,3,true]')); // [1, 2, 3, true]
console.log(JSON.parse('{"name":"simon","age":14}')); // Object {name: 'simon', age: 14}
console.log(JSON.parse('true')); // true
console.log(JSON.parse('123.45')); // 123.45

// JSON.parse()You can also receive a function to convert the parsed property:
var obj = JSON.parse('{"name":"simon","age":14}', function (key, value) {
    if (key === 'name') {
        return value + ' fong';
    }
    return value;
});
console.log(obj);  // {name: 'simon fong', age: 14}
console.log(JSON.stringify(obj)); // {name: 'simon fong', age: 14}
