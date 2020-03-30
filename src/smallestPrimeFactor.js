/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */
function smallestPrimeFactor(num) {

  // Handle even number case
  if (num % 2 === 0) {
    return 2;
  }

  // Handle odd number cases
  for (let n = 3; n <= num**(1/2); n += 2) {
    if (num % n === 0) {
      return n;
    }
    return num;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      num: 2,
      expected: 2
    },
    {
      num: 4,
      expected: 2
    },
    {
      num: 5,
      expected: 5,
    },
    {
      num: 9,
      expected: 3,
    },
    {
      num: 17,
      expected: 17
    },
    {
      num: 25,
      expected: 5
    },
    {
      num: 57,
      expected: 3
    }
  ];
  for (let test of tests) {
    console.log(smallestPrimeFactor(test.num) === test.expected);
  }
}

module.exports = smallestPrimeFactor;
