// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0
    let strArr = str.toLowerCase().split("")

    let vowlesArray = ['a','e','i', 'o', 'u']

    for(let i = 0; i< strArr.length; i++){
        if(vowlesArray.includes(strArr[i])){
            count++
        }
    }

    console.log(count)
    return count
}

module.exports = vowels;
