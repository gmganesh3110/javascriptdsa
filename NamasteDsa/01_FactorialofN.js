// Factorial of n
// Factorial of n is the product of all positive integers less than or equal to n. It is denoted by n! and is defined as:
// n! = n * (n-1) * (n-2) * ... * 1

function factorialOfn(n) {
    if (n == 1) return 1;
    return n * factorialOfn(n - 1);
}
console.log(factorialOfn(5))

