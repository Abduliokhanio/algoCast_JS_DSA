// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split('')
    let revArr = []
    let revW = ''

    for(let i = strArr.length-1; i >= 0 ; i--){
        revArr.push(strArr[i])
    }

    revW = revArr.join('')

    console.log(revW)
    return revW
}

// function reverse(str) {
//     let ans = str.split("").reverse().join("");
//     return ans
// }

reverse('abdulkhan')

module.exports = reverse;
