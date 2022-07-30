// JavaScript Arraycan contain arbitrary data types, and each element is accessed by index.
// To get Arraythe length, access the lengthproperty directly:
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length);
console.log('\n');

// Note that assigning a new value directly to Array, results in a change in size:lengthArray
var arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 6;
console.log(arr.length);
console.log(arr);
arr.length = 2;
console.log(arr.length);
console.log(arr);
console.log('\n');

// in array, the corresponding element can be modified to a new value through the index, 
// so Array assigning an index to the index will directly modify this Array:
var arr = ['A', 'B', 'C'];
console.log(arr);
arr[1] = 99;
console.log(arr);
console.log('\n');

//  if the index exceeds the range when assigning by index, the Arraysize will also change:
var arr = [1, 2, 3];
console.log(arr);
arr[5] = 'x';
arr[9] = 'y';
console.log(arr);
console.log('\n');

// Most other programming languages ​​do not allow changing the size of an array directly, 
// and out-of-bounds access to an index will throw an error. However, JavaScript Arraydoes not have any errors. 
// When writing code, it is not recommended to modify Arraythe size directly, and when accessing the index, 
// make sure that the index does not go out of bounds.

// indexOf
var arr = [10, 20, '30', 'xyz'];
console.log(arr.indexOf(10)); 
console.log(arr.indexOf(20)); 
console.log(arr.indexOf(30)); 
console.log(arr.indexOf('30'));
console.log('\n');

// slice
// slice()It is the version corresponding to String substring(), which intercepts Arraysome elements and returns a new one Array:
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.length); 
// index starts from 0 to 2
console.log(arr.slice(0, 3)); 
// index starts from 3 to 6
console.log(arr.slice(3)); 
console.log('\n');

// If no slice()arguments are passed, it will truncate all elements from beginning to end. 
// taking advantage of this, we can easily replicate one Array
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(aCopy === arr); // false
console.log(aCopy == aCopy); // true
console.log(aCopy === aCopy); // true
console.log('\n');

// push and pop
// push() array add several elements to the end of , pop() delete array the last element of array.
var arr = [1, 2];
arr.push('A', 'B'); //  4
console.log(arr); // [1, 2, 'A', 'B']
console.log(arr.pop()); // 'B'
console.log(arr); // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // pop 3 times
console.log(arr); // []
console.log(arr.pop()); // undefined
console.log(arr); // []
console.log('\n');

// unshift and shift
// If you want to array add several elements to the head, use the unshift() method, 
// shift() the method will array delete the first element:
var arr = [1, 2];
console.log(arr.unshift('A', 'B')); // 4
console.log(arr); // ['A', 'B', 1, 2]
console.log(arr.shift()); // 'A'
console.log(arr); // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // shift 3 times
console.log(arr); // []
console.log(arr.shift()); // undefined
console.log(arr); // []
console.log('\n');

// sort
// the current can array be sorted, it will directly modify the current Arrayelement position, 
// and when it is called directly, it will be sorted according to the default order
var arr = ['B', 'C', 'A'];
console.log(arr.sort()); // ['A', 'B', 'C']
var arr = ['B', '1', 'A', 'a', '2'];
console.log(arr.sort()); 
console.log('\n');

// reverse
// reverse the entire Arrayelement, that is, reverse it
var arr = ['one', 'two', 'three'];
console.log(arr.reverse());  // ['three', 'two', 'one']
console.log('\n');

// splice
// The method is a modified array "catch-all method" that removes several elements starting at a specified index, 
// and then adds several elements from that position:
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// delete 3 elements starting from 2, and add 2 elements Google, Facebook
console.log(arr.splice(2, 3, 'Google', 'Facebook')); // return deleted elements:  ['Yahoo', 'AOL', 'Excite']
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// only delete, not add
console.log(arr.splice(2, 2)); // ['Google', 'Facebook']
console.log(arr); // ['Microsoft', 'Apple', 'Oracle']
// only add, not delete
console.log(arr.splice(2, 0, 'Google', 'Facebook')); // return []
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
console.log('\n');

// concat
// the method joins the current one array with another array and returns a new one Array:
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(added); // ['A', 'B', 'C', 1, 2, 3]
console.log(arr); // ['A', 'B', 'C']
console.log('\n');

// concat() methods can take any number of elements and array automatically array unpack them and 
// add them all to a new one array
var arr = ['A', 'B', 'C'];
console.log(arr.concat(1, 2, [3, 4], [5, 6,7])); // ['A', 'B', 'C', 1, 2, 3, 4, 5, 6, 7]
console.log('\n');
// join
// the method is a very practical method, it concatenates array each current element with the specified string, 
// and then returns the concatenated string:
var arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-')); // 'A-B-C-1-2-3'
// If the element in array is not a string, it will be automatically converted to a string before concatenating.
console.log('\n');

// multidimensional arrays
// multidimensional arrays can be formed if an element of the array is another one array, for example:
var arr = [[1, 2, 3], [400, 500, 600]];  
console.log(arr.join('-')); // 1,2,3-400,500,600