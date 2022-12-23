// https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const LCM = (n) => {
  const nums = Array.from(Array(n + 1).keys()).slice(1);

  return nums.reduce((acc, el) => {
    let number = el;
    let currentLCM = acc;

    while (currentLCM && number) {
      currentLCM > number
        ? (currentLCM = currentLCM % number)
        : (number = number % currentLCM);
    }

    return (acc * el) / (number + currentLCM);
  });
};

console.log(LCM(20));
