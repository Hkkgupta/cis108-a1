/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 * countItems(['apple', 'goat', 'apple', 'potato']);
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array) {
  const frequencyDict = {};

  for (let item of array) {
    if (frequencyDict.hasOwnProperty(item)) {
      frequencyDict[item] += 1;
    } else {
      frequencyDict[item] = 1;
    }
  }
  return frequencyDict;
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      array: ['apple', 'orange', 'apple', 'banana'],
      expected: {'apple': 2, 'orange': 1, 'banana': 1}
    },
    {
      array: ['a','a','b','c','c','d','e','e'],
      expected: {'a': 2,'b': 1,'c': 2,'d': 1,'e': 2}
    }
  ];

  for (let test of tests) {
    let valid = true;
    let output = countItems(test.array);
    for (let item in output) {
      if (output[item] !== test.expected[item]) {
        valid = false;
      }
    }
    console.log(valid);
  }
}

module.exports = countItems;
