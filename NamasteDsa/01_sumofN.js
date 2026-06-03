// Sum of first N natural numbers using recursion

function sumofN(n){
    if(n<1) return 0;
    return n+sumofN(n-1)
}
console.log(sumofN(5))
