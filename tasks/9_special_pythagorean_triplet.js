// https://projecteuler.net/problem=9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const tripletSum = 1000;

const pythagoreanTriplet = () => {
  for (let a = 1; a <= tripletSum; a++) {
    for (let b = 1; b <= tripletSum; b++) {
      const c = tripletSum - a - b;
      if (a ** 2 + b ** 2 === c ** 2 && a < b && b < c) {
        return a * b * c;
      }
    }
  }
};

console.log(pythagoreanTriplet()); /* 31875000, a = 200, b = 375, c = 425 */
