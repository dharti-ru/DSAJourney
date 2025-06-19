// 🧠 Problem: First Unique Character in a String

// Given a string s, return the index of the first non-repeating character.
// If there is no such character, return -1.

// 📘 Example:

// js
// Copy
// Edit
// Input: "leetcode"
// Output: 0   // 'l' is the first non-repeating character

// Input: "loveleetcode"
// Output: 2   // 'v'

// Input: "aabb"
// Output: -1

function getFirstUniqueChar(str){
    let uniqueCharSet = new Set();
    let charMap = new Array(26).fill(0);
    for(char of str){
        let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        charMap[idx]++;
        if(charMap[idx] == 1) {
            uniqueCharSet.add(char);
        } else if(charMap[idx] > 1) uniqueCharSet.delete(char);
    }
    return [...uniqueCharSet][0] || -1;
}
console.log(getFirstUniqueChar("leetcode")); //l
console.log(getFirstUniqueChar("loveleetcode")); //v
console.log(getFirstUniqueChar("")); //-1
console.log(getFirstUniqueChar("aabb")); //-1



function getFirstUniqueCharIndex(str){
    let uniqueCharSet = new Set();
    let charMap = new Array(26).fill(0);
    for(const char of str){
        let idx = char.charCodeAt(0) - 97;
        charMap[idx]++;
        if(charMap[idx] == 1) {
            uniqueCharSet.add(char);
        } else if(charMap[idx] > 1) uniqueCharSet.delete(char);
    }
    let uniqueChar = str.indexOf([...uniqueCharSet][0]);
    return uniqueChar;
}
console.log(getFirstUniqueCharIndex("leetcode")); //0
console.log(getFirstUniqueCharIndex("loveleetcode")); //2
console.log(getFirstUniqueCharIndex("")); //-1
console.log(getFirstUniqueCharIndex("aabb")); //-1