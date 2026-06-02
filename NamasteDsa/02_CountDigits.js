function countDigits(n) {
    let count = 0;
    if (n === 0) {
        return 1; // Special case for 0, which has 1 digit
    }
    n=Math.abs(n); // Handle negative numbers
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigits(25152345))