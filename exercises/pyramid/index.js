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
    let midP = Math.floor(width/2)

    for(let row = 0; row < n; row++){
        let stair = ""

        for(let col = 0; col < width; col++){
            if(midP - row <= col && midP + row >= col){
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
