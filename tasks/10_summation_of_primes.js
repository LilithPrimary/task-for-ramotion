// https://projecteuler.net/problem=10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

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

const primeSum = (n) => {
  let i = 0;
  let sum = 0;

  while (i <= n) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }

  return sum;
};

console.log(primeSum(2000000));
