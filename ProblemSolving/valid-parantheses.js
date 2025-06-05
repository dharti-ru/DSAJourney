// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([])"
// Output: true
// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

var isValid = function(s) {
    let paranthesesMap = new Map();
    paranthesesMap.set('(', ')');
    paranthesesMap.set('{', '}');
    paranthesesMap.set('[', ']');
    
    let tempStack = [];
    for(char of s){
        if(paranthesesMap.has(char)){
            tempStack.push(char);
        } else if(tempStack.length > 0){
            let lastElement = tempStack[tempStack.length - 1];
            if(paranthesesMap.get(lastElement) === char){
                tempStack.pop();
            }
            else return false;
        }
        else {
            return false;
        }
    }
    return (tempStack.length < 1);
};