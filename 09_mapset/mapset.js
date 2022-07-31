// Map
// MapIt is a structure of a set of key-value pairs with extremely fast lookup speed.
var name_score = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(name_score.get('Michael')); // 95
console.log(name_score.get('Bob')); // 75
console.log(name_score.get('Tracy')); // 85
console.log(name_score.get('tracy')); // undefined
console.log('\n');

// Initialization Maprequires a two-dimensional array, or simply initializes an empty one Map. 
// MapHas the following methods
var map = new Map();       // empty map
map.set('Adam', 67);         // add new key-value
map.set('Bob', 59);            // add new key-value
console.log(map.has('Adam'));              // check key 'Adam': true
console.log(map.get('Adam'));               // 67
map.delete('Adam');          // delete key 'Adam'
console.log(map.get('Adam'));               // undefined
console.log('\n');

// Since a key can only correspond to one value, 
// if you put a value into a key multiple times, the later value will flush out the previous value:
var map = new Map();
map.set('Adam', 67);
map.set('Adam', 88);
console.log(map.get('Adam')); // 88
console.log('\n');
  
//SET
// To create one Set, provide one Arrayas an input, or simply create an empty one Set
var s1 = new Set(); // empty set
console.log(s1);
var s2 = new Set([1, 2, 3]); // set(1, 2, 3)
console.log(s2);
// duplicate elements Setare automatically filtered in:
var s = new Set([1, 2, 3, 3, '3']);
// note that numbers 3and strings '3'are different elements.
console.log(s); // Set {1, 2, 3, "3"}
// add(key) elements can be added to through methods Set, 
// which can be added repeatedly, but will not have an effect:
var s = new Set([1, 2, 3]);
s.add(4);
console.log(s); // Set {1, 2, 3, 4}
s.add(4);
console.log(s); // Set {1, 2, 3, 4}
console.log('\n');


// Get value of SET
var set = new Set([1, 2, 3, 3]);
var itr = set.values();
for(i=0; i<set.size; i++) {
  console.log(itr.next().value);
}
console.log('\n');

// Delete key
// elements can be removed by methods:
var s = new Set([1, 2, 3, 3]);
console.log(s); // Set {1, 2, 3}
console.log(s.size);
s.delete(3);
console.log(s); // Set {1, 2}
s.delete(4);
console.log(s); // Set {1, 2}
s.delete(1);
console.log(s); // Set {1, 2}
console.log(s.size);