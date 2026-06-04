/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};


/**
 * @param {number} n
 * @return {number}
 */
var fib1 = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib1(n - 1) + fib1(n - 2)

    return b;
};

let n = 10
console.log(fib(n))