// Problem 3: Find Missing Number
// You are given an array of consecutive numbers with one missing number. Find that missing number.

// For example:

// Input: [1, 2, 4, 5]

// Output: 3

const data = [-2, 0, 1, 2];
function findMissingNumber(arr){
    let compareValue = arr[0];
    for(let i = 0; i < arr.length; i++, compareValue++){
        if(arr[i] !== compareValue) return compareValue;
    }
}
console.log(findMissingNumber(data));

// Variation A (Unsorted Array with One Missing Number)
// You're given an unsorted array of consecutive integers with one number missing. Find the missing number.

// 🧪 Example:

// Input: [5, 2, 3, 1]
// Output: 4
const data1 = [5, 2, 3, 1,10,-3];
function findMissingNumber1(arr){
    // let maxValue = Math.max(...arr);
    // let minValue = Math.min(...arr);
    // let i = 0;
    // let j = maxValue - minValue;
    // let resultArr = [];
    // while(i <= j){
    //     if(arr.indexOf(minValue) === -1){
    //         resultArr.push(minValue);
    //     }
    //     minValue++;
    //     i++;
    // }
    // return resultArr;

    const numSet = new Set(arr); // Store all elements in a Set
    let minValue = Math.min(...arr); // Get the minimum value (could be negative)
    let maxValue = Math.max(...arr); // Get the maximum value
    let resultArr = [];

    // Iterate through the range from minValue to maxValue
    for (let i = minValue; i <= maxValue; i++) {
        if (!numSet.has(i)) { // If the number is not in the set, it's missing
            resultArr.push(i);
        }
    }

    return resultArr; // Return all missing numbers
}
console.log(findMissingNumber1(data1));
