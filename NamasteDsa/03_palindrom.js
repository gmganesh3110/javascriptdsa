// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let current=Math.abs(x);
    let rev=0;
    while(x>0){
        let reminder=x%10;
        rev=(10*rev)+reminder;
        x=(x-reminder)/10; 
    }
    if(rev==current) return true;
    return false;
};

console.log(isPalindrome(-121))
console.log(isPalindrome(121))
console.log(isPalindrome(10))