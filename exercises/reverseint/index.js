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

    let str;
    let reverse = [];

    let absval = Math.abs(n);
    let absvalstr = absval.toString();

    if(Math.sign(n) === -1){
        
        for(let i = absvalstr.length-1; i >=0; i-- ){
            reverse.push(absvalstr[i]);
        }
        
        let revJoined = parseInt(reverse.join("")) *-1;

        return revJoined
        
        
    }else{

        for(let i = absvalstr.length-1; i >=0; i-- ){
            reverse.push(absvalstr[i]);
        }

        let revJoined = parseInt(reverse.join(""));
        return revJoined

    }

}

reverseInt(1223)

module.exports = reverseInt;
