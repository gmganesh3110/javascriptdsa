// 231. Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 2 || n == 1) return true
    if (n < 2) return false;
    return isPowerOfTwo(n / 2)
};

let n = 16
console.log(isPowerOfTwo(n))