// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    allArr = []

    for(let i = 0 ; i < array.length; i++ ){
        if(!allArr[allArr.length-1] || allArr[allArr.length-1].length == size){
            allArr.push([array[i]])
        }else {
            allArr[allArr.length-1].push(array[i])
        }
    }
    console.log(allArr)
    return allArr
}

chunk([1,2,3,4,5,6],4)

module.exports = chunk;
