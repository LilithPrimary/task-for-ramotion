// https://projecteuler.net/problem=2

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const sumEvenFibonacci = (n) => {
  let sum = 0;
  let first = 0;
  let second = 1;
  let fibonacciNum = 1;

  while (fibonacciNum < n) {
    sum += fibonacciNum % 2 === 0 ? fibonacciNum : 0;
    fibonacciNum = first + second;
    first = second;
    second = fibonacciNum;
  }

  return sum;
};

console.log(sumEvenFibonacci(4000000));
