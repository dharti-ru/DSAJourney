// Problem: Max Consecutive Ones with One Flip
// You are given a binary array nums (only 0s and 1s). You can flip at most one 0 to 1. Find the length of the longest subarray of 1s you can get.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 6
// Explanation: Flip the 0 to 1 → [1,1,1,1,1,1]

// Example 2:
// Input: nums = [1,0,1,0,1]
// Output: 3
// Example 3:

// Input: nums = [0,0,0]
// Output: 1

// Constraints:
// 1 <= nums.length <= 10^5

// nums[i] is either 0 or 1

// You can flip at most one 0

// let nums = [1,1,0,1,1,1];
// let nums = [1,0,1,0,1,0,1];
// let nums = [0,1,1,0,1,1,1,0];
let nums = [1];

// Keep increasing window until we encounter the a zero.
// If found flip it once, note down the index say encounteredIndex and continue.
// If encountered again, we move the window to encounteredIndex + 1 till current index and flip this zero and continue again.
// If the previous window size was greater than this one it stays as it is otherwise it will increase based on this

function getMaxConsecutiveOnes(nums){
    let currentWindowCount = 0;
    let maxOnesCount = 0;

    let flipIndex = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            currentWindowCount = i - flipIndex;
            flipIndex = i;
        }
        else currentWindowCount++;
        if(maxOnesCount < currentWindowCount) maxOnesCount = currentWindowCount;
    }

    return maxOnesCount;
}
console.log(getMaxConsecutiveOnes([1,1,0,1,1,1])); // 6
console.log(getMaxConsecutiveOnes([1,0,1,1,0]));   // 4
console.log(getMaxConsecutiveOnes([1,0,1,0,1,0,1])); // 3
console.log(getMaxConsecutiveOnes([0,0,0]));        // 1
console.log(getMaxConsecutiveOnes([1,1,1,1]));      // 4
console.log(getMaxConsecutiveOnes([]));            // 0