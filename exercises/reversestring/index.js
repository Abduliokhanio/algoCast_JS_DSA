// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    
    let forward_arr = str.split("");
    let reverse = ''; 

    for(let i = forward_arr.length-1; i >= 0; i--){
        reverse += forward_arr[i];
    }
    return reverse;
}

// function reverse(str) {
//     let ans = str.split("").reverse().join("");
//     return ans
// }

module.exports = reverse;
