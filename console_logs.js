
/*********************
 Log to the console
*********************/

//clears the console
 console.clear();

// simple log
console.log('hello world');   //string
console.log('123');           //numer
console.log('true');          //boolean

// log a variable
var greeting = 'Hello';
console.log(greeting);

// log array
console.log([1,2,3,4,5]);

// log objects
console.log({a:1, b:2, c:3});

// log objects as table
console.table({a:1, b:2, c:3});

// error log (red)
console.error('This is some error!');

// warning log (yellow)
console.warn('This is a warning!')

// timing
console.time('HELLO');
  console.log('hello world');
  console.log('hello world');
  console.log('hello world');
  console.log('hello world');
  console.log('hello world');
console.timeEnd('HELLO');