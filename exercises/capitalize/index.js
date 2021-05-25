// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let strArr = str.split(" ")
    let splitSent = []

    for(let i = 0; i < strArr.length; i++ ){
        let cap = strArr[i].split('')[0].toUpperCase()
        let restWord = strArr[i].slice(1)

        let capWord = cap + restWord
        splitSent.push(capWord)
    }

    let fullCapSent = splitSent.join(" ")

    return(fullCapSent)

}

capitalize("a short sentence")

module.exports = capitalize;
