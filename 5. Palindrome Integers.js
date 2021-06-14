// A palindrome is a number which reads the same backward as forward, such as 323 or 1001. Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.

function palindrome(arr) {

    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join('');
        return Number(reversedN) === n ? true : false;
    }
    let printLines = '';
    for (const n of arr) {
        printLines += isPalindrome(n) + '\n';
    }

    return printLines;
}

palindrome(
    [32, 2, 232, 1010]
);