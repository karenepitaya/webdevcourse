// eslint-test.js

// Unused variable
var unusedVar = 10;

// Missing semicolons and improper indentation
function testFunc() {
  console.log('Hello ESLint');
  if (true) {
    console.log('Improper Indentation');
  }
}

// Incorrect spacing
const x = 5;

// No trailing comma
const obj = {
  a: 1,
};

testFunc();

// Double quotes
const msg = 'This should use single quotes';
console.log(msg);
