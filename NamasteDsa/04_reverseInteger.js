// 7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let negative = x < 0;
    let num = Math.abs(x);
    let rev = 0;
    while (num > 0) {
        let reminder = num % 10;
        rev = (10 * rev) + reminder;
        num = (num - reminder) / 10
    }
    if (rev < -(2 ** 31) || (rev > (2 ** 31 - 1))) return 0;
    if (negative) return -rev
    else return rev;
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))