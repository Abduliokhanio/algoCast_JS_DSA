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
        let nws = lc.replace( /[^\w]/g ,'')
        return nws.split('')
    }

    function cache(arr1){
        let cachey = {}

        for(let i = 0; i < arr1.length; i++ ){
            let element = arr1[i]
            
            if(!cachey[element]){
                cachey[element] = 1
            }else{
                cachey[element]++
            }
        }
        return cachey
    }

    let arr1 = clean(stringA)
    let arr2 = clean(stringB)

    let hash1 = cache(arr1)
    let hash2 = cache(arr2)

    //keys 
    let key1 = Object.keys(hash1)
    let key2 = Object.keys(hash2)

    if(key1.length != key2.length){return false}

    for(let i = 0; i < key1.length; i++ ){
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
