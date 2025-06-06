// Permutation in String
// 🧠 This brings sliding window + character frequency matching together — good Amazon-style twist!

// 🔍 Problem:
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// 📥 Example:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// // Explanation: s2 contains one permutation of s1 ("ba").

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
// 📌 Constraints:
// Both strings contain only lowercase letters.

// Use a sliding window of size s1.length

// Compare the character frequency in the current window with that of s1.
var checkInclusion = function(s1, s2) {
if(s1.length > s2.length) return false;
    let currentWindowChars = s2.substr(0,s1.length);

    let s1CountArr = new Array(26).fill(0)
    let s2CountArr = new Array(26).fill(0);

    s1CountArr = generateCharMap(s1CountArr,s1);
    s2CountArr = generateCharMap(s2CountArr,currentWindowChars);
    if(compareArrays(s1CountArr,s2CountArr)) return true;
    
    for(let i = 1; i < s2.length - s1.length + 1; i++) {
        let prevCharId = s2[i-1].charCodeAt(0) - 'a'.charCodeAt(0);
        let currentCharId = s2[i + s1.length - 1].charCodeAt(0) - 'a'.charCodeAt(0);
        
        s2CountArr[prevCharId]--;
        s2CountArr[currentCharId]++;
        
        if(compareArrays(s1CountArr,s2CountArr)) return true;
    }
    return false;
};

function generateCharMap(countArr,str){
    for (let char of str) {
        let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        countArr[idx]++;
    }
    return countArr;
}
function compareArrays(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
console.log(checkInclusion('ab','gsdfadasbagsd'))