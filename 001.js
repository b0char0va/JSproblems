//Check for Palindromes
//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    var str1 = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return (str1.split("").reverse().join("") === str1);
}

console.log(palindrome("eye"));