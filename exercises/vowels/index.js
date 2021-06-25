// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let strArr = str.toLowerCase().split('')
    let counter = 0
    let vowels = ["a","e","i","o","u"]


    for(let i = 0; i <= strArr.length; i++){
        if(vowels.includes(strArr[i])){
            counter++
        }
    }   

    console.log(counter)
    return counter++

}


vowels('Why do you ask?')

module.exports = vowels;
