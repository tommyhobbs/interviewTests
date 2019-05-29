const array = ['hello', 'world', 'hello', 'world', 'cat', 'world'];
let count = {};
let reduced = [];

array.forEach(word => {
  if (count[word] !== undefined) {
    count[word]++;
  } else {
    count[word] = 1;
  }
});

Object.keys(count).forEach(key => {
  if (count[key] > 1) {
    reduced.push(key);
  }
});

console.log(reduced);
