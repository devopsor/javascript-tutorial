// loop
var x = 0;
var i;
for (i=1; i<=100; i++) {
    x = x + i;
}
console.log(x); 

//for
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}
console.log('\n'); 

// break infinite loop
var x = 0;
for (;;) {
    if (x > 100) {
        break; 
    }
    x ++;
}
console.log('\n'); 

// for ... in
var o = {
  name: 'Jack',
  age: 20,
  city: 'New York'
};
for (var key in o) {
  console.log(key); // 'name', 'age', 'city'
}
console.log('\n'); 

// hasOwnProperty
var o = {
  name: 'Jack',
  age: 20,
  city: 'New York'
};
for (var key in o) {
  if (o.hasOwnProperty(key)) {
      console.log(key); // 'name', 'age', 'city'
  }
}
console.log('\n'); 

// for in
var a = ['A', 'B', 'C'];
for (var x in a) {
    console.log(x); // '0', '1', '2'
    console.log(a[x]); // 'A', 'B', 'C'
}
console.log('\n'); 

// while
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
console.log(x); // 2500
console.log('\n'); 

// do while
var n = 0;
do {
    n = n + 1;
} while (n < 100);
console.log(n); // 100