// Reverse Vowels of a String
// Swap only the vowels in a string using two pointers.
// → s = "hello" → Output: "holle"
s = "hello";
function reverseVowels(s){  
    str = s.split("") 
    let [left,right] = [0,str.length - 1];

    while(left < right){
        if(!/[aeiou]/i.test(str[left]))left++;
        else if(!/[aeiou]/i.test(str[right])) right--;
        else {
            let temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            left++; right--;
        }
        
    }
    return str.join("");
}
console.log(reverseVowels(s))