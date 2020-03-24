/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */

function maxKey(obj) {
  let runningLargest;
  for (let entry in obj) {
    if (obj.hasOwnProperty(entry)) {
      if (runningLargest) {
        if (obj[entry] > obj[runningLargest]) {
          runningLargest = entry;
        }
      } else {
        runningLargest = entry;
      }
    }
  }
  return runningLargest;
}


if (require.main === module) {
  console.log('Running sanity checks for maxKey:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      obj: {'a': 1, 'b': 2,'c': 3},
      expected: 'c'
    },
    {
      obj: {'hello': -10,'world': 10,'this': 5,'is': 15,'a': 2,'test': 0},
      expected: 'is'
    },
    {
      obj: {'a': -1,'b': -2,'c': 0,'d': 1,'e': 2},
      expected: 'e'
    }
  ];
  for (let test of tests) {
    console.log(maxKey(test.obj) === test.expected);
  }
}

module.exports = maxKey;
