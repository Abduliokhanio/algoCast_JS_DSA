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
        let ls = strVal.toLowerCase()
        let ns = ls.replace(/[^\w]/g,'')
        return ns.split('')
    }

    function cacheify(arr) {
        let cash = {}

        for(let i = 0; i < arr.length; i++){
            let element = arr[i]
            let val = cash[element]
            if(cash[element]){
                cash[element]++
            }else{
                cash[element] = 1;
            }
        }

        return cash
    }

    let cash1 = cacheify(clean(stringA))
    let cash2 = cacheify(clean(stringB))

    let key1 = Object.keys(cash1)
    let key2 = Object.keys(cash2)

    if(key1.length !== key2.length){return false}

    for(let i = 0; i < key1.length; i++){
        let element = key1[i]
        let val1 = cash1[element]
        let val2 = cash2[element]
        if(val1 !== val2){
            return false
        }
    }
    return true
}

anagrams('Hello', 'oLL eh')

module.exports = anagrams;
