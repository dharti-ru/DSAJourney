// Valid Palindrome
// Check if a string is a palindrome, ignoring spaces and punctuation.
// → s = "A man, a plan, a canal: Panama" → Output: true

const s = "A man, a plan, a canal: Panama";

function checkPalindrome(str){
    str = str.toLowerCase().split("").filter((char) => char.match(/[a-z]/g));
    
    let [left,right] = [0,str.length - 1];
    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log("checkPalindrome: ",checkPalindrome(s))