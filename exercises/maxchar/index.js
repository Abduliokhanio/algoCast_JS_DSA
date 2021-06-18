// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    //split string
    //add it to a hashkv object ex pair{w:2}
        //allowing it to add to the value if it already exists.
    //compare the values to see who has the largest value
    //return the key as the answer

    let splitStr = str.split('')
    let cacher = {}
    let maxC = ''
    let maxN = 0

    for(let i = 0; i < splitStr.length; i++){
        let element = splitStr[i]

        if(cacher[element]){
            cacher[element]++
        }else{
            cacher[element] = 1
        }
    }

    let keys = Object.keys(cacher)

    for(let i = 0; i< keys.length; i++){
        let element = keys[i]

        if(cacher[element] > maxN){
            maxN = cacher[element]
            maxC = element
        }
    }

    console.log(`max C : ${maxC} && max N : ${maxN}`)
    return maxC
    
}

maxChar("Hello World!")

module.exports = maxChar;







/*
function maxChar(str) {
    
    //split string
    //add it to a hashkv object ex pair{w:2}
        //allowing it to add to the value if it already exists.
    //compare the values to see who has the largest value
    //return the key as the answer

    let strMap = {};
    let strArr = str.split("");
    let answer
    
    for(let i = 0; i < strArr.length; i++ ){
        if(!strMap[strArr[i]]){
            strMap[strArr[i]] = 1;
        }else {
            strMap[strArr[i]]++;
        }
    }

    let valArr = Object.values(strMap)
    let maxNumber = Math.max.apply(Math,valArr);

    for(let i = 0; i < strArr.length; i++ ){
        if(strMap[strArr[i]] == maxNumber){
            answer = strArr[i]
            break
        }
    }

    return answer
    
}
*/