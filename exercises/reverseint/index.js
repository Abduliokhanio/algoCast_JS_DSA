// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let absN = Math.abs(n)
    let n2s = n.toString()
    let n2sArr = n2s.split('')
    let revN2sArr = []
    let revN2S = ''
    let s2n = 0

    for(let i = n2sArr.length -1 ; i>= 0; i--){
        revN2sArr.push(n2sArr[i])
    }

    revN2S = revN2sArr.join('')

    s2n = parseInt(revN2S)

    if(n < 0){
        console.log(s2n *-1)
        return(s2n *-1)
    }else{
        console.log(s2n)
        return(s2n)
    }

}

reverseInt(-1223)

module.exports = reverseInt;
