// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

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

const largestPrime = (n) => {
  for (let i = Math.ceil(Math.sqrt(n)); i > 2; i--) {
    if (n % i === 0 && isPrime(i)) {
      return i;
    }
  }
};

console.log(largestPrime(600851475143));
