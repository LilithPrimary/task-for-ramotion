// https://projecteuler.net/problem=4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const maxThreeDigitNum = 999;

const isPalindrome = (num) =>
  num.toString() === num.toString().split('').reverse().join('');

const largestPalindrome = (maxNum) => {
  const numLength = maxNum.toString().length;
  let a = maxNum;
  let b = maxNum;
  let maxPalindrome = 0;

  while (a.toString().length === numLength) {
    if (maxPalindrome >= a * maxNum) {
      return maxPalindrome;
    }

    while (b.toString().length === numLength) {
      const product = a * b;
      if (product > maxPalindrome && isPalindrome(product)) {
        maxPalindrome = product;
      }

      b--;
    }

    b = maxNum;
    a--;
  }
  return maxPalindrome;
};

console.log(largestPalindrome(999));
