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
    let width = 2*n-1
    let midpoint = Math.floor(width/2)

    for(let row =0; row< n; row++){
        let stair = ""
        for(let column = 0; column < width; column++){
            if(midpoint - row <= column && midpoint + row >= column){
                stair += "#"
            }else{
                stair += " "
            }
        }
        console.log(stair)
    }
}

pyramid(5)


module.exports = pyramid;
