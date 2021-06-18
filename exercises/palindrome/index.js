// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    let strArr = str.split('')
    let revArr = []
    let revW = ''

    for(let i = strArr.length - 1; i >= 0 ; i--){
        revArr.push(strArr[i])
    }

    revW = revArr.join('')

    console.log(revW === str)
    return (revW === str)

}

palindrome("racecar")

module.exports = palindrome;
