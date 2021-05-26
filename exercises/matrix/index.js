// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
   
    let result = []

    for(let i = 0; i <n; i++){
        result.push([])
    }

    let counter = 0 

    let columnStart = 0
    let columnEnd = n-1

    let rowStart = 0
    let rowEnd = n-1

    while(columnStart <= columnEnd && rowStart <= rowEnd){
        //top
        for(let i = columnStart; i <= columnEnd; i++){
            result[rowStart][i] = counter
            counter++
        }
        rowStart++

        //right
        for(let i = rowStart; i <= rowEnd; i++){
            result[i][endColumn] = counter
            counter++
        }
        endColumn--

        //bottom
        for(let i =endColumn; i>= startCol; i-- ){
            result[endRow][i] = counter
            counter++
        } 
        endRow--

        //left curl
        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = counter
            counter++
        }

        startCol++
    }

    console.log(result)
    return result
    
}

matrix(4)

module.exports = matrix;
