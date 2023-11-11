
// Check if given number is a palindrome number or not

const isPalindrome = function (num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(isPalindrome(1010));