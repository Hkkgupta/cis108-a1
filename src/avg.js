let sum = require('./sum');

/**
 * Returns the average of the numbers in the input array.
 *
 * Use your own sum function, required above. Assume that
 * the input array is non-empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The average
 */
function avg(array) {
  // This is your job. :)
  // Use the sum function you wrote rather than re-implementing
  // it in this file. We required it above.

  return sum(array)/array.length;
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      array: [1,2,3,4,5],
      expected: 3,
    },
    {
      array: [0,0,0,0,0],
      expected: 0
    },
    {
      array: [-2,-1,0,1,2],
      expected: 0,
    },
    {
      array: [-8,-6,-4,-2,0],
      expected: -4
    },
    {
      array: [10,20,30,40],
      expected: 25
    }
  ];

  for (let test of tests) {
    console.log(avg(test.array) === test.expected);
  }

}

module.exports = avg;
