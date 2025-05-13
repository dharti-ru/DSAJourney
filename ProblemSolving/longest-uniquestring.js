/* Problem 1: Find the Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

For example:

Input: "abcabcbb"

Output: 3 (because the longest substring without repeating characters is "abc") */


function getLongestSubstring(str){
    if(!str) return 0;
    let resStr = "";
    let arr = [];
    let result = 0;
    for(let char of str){
        if(resStr.includes(char)){
            arr.push({str: resStr, len: resStr.length});
            resStr = char;
        }
        else resStr += char;
    }
    if(arr.length == 0) arr.push({str: resStr, len: resStr.length});
    console.log(arr);
    // result = Math.max(...arr.len);
    return result;
}

function getLongestSubstring1(str) {
    if (!str) return 0;
    console.log(str);
    let resStr = "";
    let maxLength = 0;
    
    for (let char of str) {
        const index = resStr.indexOf(char);
        
        if (index !== -1) {
            console.log(resStr+":"+index);
            resStr = resStr.slice(index + 1);
            console.log("after:"+resStr);
        }
        
        resStr += char;
        maxLength = Math.max(maxLength, resStr.length);
    }
    
    return maxLength;
}

console.log(getLongestSubstring("abcadjkadnmsaodnhhgskdfgijendjndjdjjdnnaabcdddakrufjs"));
console.log(getLongestSubstring1("abcadjkadnmsaodnhhgskdfgijendjndjdjjdnnaabcdddakrufjs"));