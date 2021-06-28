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
  
    let totalW = 2*n-1
    let mP = Math.floor(totalW/2)

    for(let row = 0; row < n; row++){//row
        let lvl = ""
        for(let col = 0; col < totalW; col++){//col
            if(mP - row <= col && mP +row >= col){
                lvl+="#"
            }else{  
                lvl +=" "
            }
        }
        console.log(lvl)
    }    

}

pyramid(5)


module.exports = pyramid;
