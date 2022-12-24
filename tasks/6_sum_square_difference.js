// https://projecteuler.net/problem=6

// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const difference = (n) => {
  const nums = Array.from(Array(n + 1).keys()).slice(1);
  return (
    nums.reduce((acc, el) => acc + el) ** 2 -
    nums.reduce((acc, el) => acc + el ** 2, 0)
  );
};

console.log(difference(100));
