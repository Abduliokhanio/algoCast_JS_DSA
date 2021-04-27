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

    let strMap = {}
    let strArr = str.split("")
    let maxint = 0
    let maxChar

    for(let i =0; i < strArr.length; i++ ){
        
        if(!strMap[strArr[i]]){
            strMap[strArr[i]] = 1;
        }else{
            strMap[strArr[i]]++; 
        }    

    }

    for(let i =0; i < strArr.length; i ++){
        //console.log(strMap[strArr[i]])

        if( maxint < strMap[strArr[i]]){
            maxint = strMap[strArr[i]]
            maxChar = strArr[i]
        }
    }

    return maxChar
    
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