// Longest Substring with Equal Number of Letters and Digits
// Problem:
// Given a string containing only digits and lowercase letters, return the length of the longest substring that contains an equal number of letters and digits.
// Input: "a0b1c2"
// Output: 6 // Whole string has 3 letters and 3 digits

// Input: "abcd123"
// Output: 6 // "bcd123"
let str = "1bc123xyz";
function getSubstring(str){
    let arr = [...str];
    let result = [];
    let alphaNumMap = new Map();

    alphaNumMap.set(0,-1);

    let [charCount,numCount]=[0,0];

    for(let i = 0; i < arr.length; i++){
        if (/[a-zA-Z]/.test(str[i])) {
            charCount++;
        } else if (/[0-9]/.test(str[i])) {
            numCount++;
        }
        let difference = charCount - numCount;
        
        if(alphaNumMap.has(difference)){
            let start = alphaNumMap.get(difference);
            let tempResult = arr.slice(start+1,i+1);
            if(result.length < tempResult.length)
                result = tempResult;
        }
        else alphaNumMap.set(difference,i);
    }
    return result.join('');
}
console.log(getSubstring(str));
console.log(getSubstring("abc123"));        // "abc123"
console.log(getSubstring("a1b2c3x"));       // "a1b2c3"
console.log(getSubstring("a1x2"));          // "a1x2"
console.log(getSubstring("1a2b3c4d5e"));     // "1a2b3c4d5e"
console.log(getSubstring("abc"));           // ""
console.log(getSubstring("123"));           // ""
console.log(getSubstring("a1b1c1d1"));       // "a1b1c1d1"