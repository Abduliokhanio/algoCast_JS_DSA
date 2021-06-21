// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    
    function clean(strVal){
        let lc = strVal.toLowerCase()
        let nw = lc.replace( /[^\w]/g,'')
        return nw.split('')
    }

    function cacheify(arr){
        let cash = {}

        for(let i = 0; i< arr.length; i++){
            let element = arr[i]
            
            if(cash[element]){
                cash[element]++
            }else{
                cash[element] = 1
            }
        }
        return cash
    }

    //split Array
    let arr1 = clean(stringA)
    let arr2 = clean(stringB)

    //hash objs
    let hash1 = cacheify(arr1)
    let hash2 = cacheify(arr2)

    //keys
    let key1 = Object.keys(hash1)
    let key2 = Object.keys(hash2)

    if(key1.length !== key2.length){
        return false
    }

    for(let i = 0; i < key1.length; i++){
        let element = key1[i]
        let val1 = hash1[element]
        let val2 = hash2[element]
        if(val1 != val2){
            return false 
        }
    }

    return true
}

anagrams('Hello', 'oLaL eh')

module.exports = anagrams;
