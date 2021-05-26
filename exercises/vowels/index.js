// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let strArray = str.toLowerCase().split("")
    let count = 0

    for(let i =0; i < strArray.length; i++){
        if(strArray[i] === 'a' || strArray[i] === 'e' ||strArray[i] === 'i' ||strArray[i] === 'o' ||strArray[i] === 'u' ){
            count++
        }
    }

    console.log(count)
    return count
}


vowels("Why do you ask?")

module.exports = vowels;
