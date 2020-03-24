/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let runningLargest = array[0];
  for (let item of array) {
    if (item > runningLargest) {
      runningLargest = item;
    }
  }
  return runningLargest;
}

if (require.main === module) {
  console.log('Running sanity checks for max:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      array: [1,2,3,4,5],
      correct: 5
    },
    {
      array: [5,4,3,2,1],
      correct: 5
    },
    {
      array: [-2,-1,0,1,2],
      correct: 2,
    },
    {
      array: [5,5,5,5,5],
      correct: 5,
    },
    {
      array: [-5,-4,-3,-2,-1],
      correct: -1,
    },
    {
      array: [0,0,0,0,0],
      correct: 0
    }
  ];

  for (let test of tests) {
    console.log(max(test.array) === test.correct);
  }
}

module.exports = max;
