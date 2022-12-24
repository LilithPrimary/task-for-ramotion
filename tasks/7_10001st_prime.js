// https://projecteuler.net/problem=7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num < 4) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(num); i += 2)
    if (num % i === 0) {
      return false;
    }
  return true;
};

const nthPrimeNum = (n) => {
  let counter = 0;
  let num = 0;

  while (counter !== n) {
    num++;

    if (isPrime(num)) {
      counter++;
    }
  }

  return num;
};

console.log(nthPrimeNum(10001)); /* 104743 */
