// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let totalWidth = 2*n-1
    let midPoint = Math.floor(totalWidth/2)

    for(let row = 0; row < n; row++){//rows
        let lvl = ""
        for(let col= 0 ; col < totalWidth; col++){//col
            if(midPoint-row <= col && midPoint+row >= col){
                lvl += "#"
            }
            else{
                lvl += " "
            }
        }
        console.log(lvl)
    }

}

pyramid(5)


module.exports = pyramid;
