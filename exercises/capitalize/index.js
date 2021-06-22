// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let strArr = str.split(' ')
    let capArr = []

    for(let i = 0; i < strArr.length; i++){
        let element = strArr[i]

        let fl = element[0].toUpperCase()
        let otherLetters = element.slice(1)

        let cw = fl + otherLetters
        capArr.push(cw)
    }

    let cs = capArr.join(' ')

    console.log(cs)
    return cs
}

capitalize("a short sentence")

module.exports = capitalize;
