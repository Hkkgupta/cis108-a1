/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  // Using reduce:
  // return array.reduce((a,b) => a+b);

  // Manually
  let runningTotal = 0;
  for (let item of array) {
    runningTotal += item;
  }
  return runningTotal;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      array: [1,2,3,4,5],
      expected: 15
    },
    {
      array: [-2,-1,0,1,2],
      expected: 0
    },
    {
      array: [0,0,0,0,0],
      expected: 0,
    },
    {
      array: [-1,-2,-3,-4,-5],
      expected: -15
    },
    {
      array: [10,10,10,-10,-10,-10],
      expected: 0
    }
  ];

  for (let test of tests) {
    console.log(sum(test.array) === test.expected);
  }
}

module.exports = sum;
