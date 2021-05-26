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
    let vs= ['a','e','i','o','u']
    str = str.split("")

    for(let i = 0; i< str.length; i++){
        if (vs.includes(str[i])){
            count++
        }
    }
    console.log(count)
}


vowels("Why do you ask?")

module.exports = vowels;
