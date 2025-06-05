// 🔸 Problem:
// Maximum Sum Subarray of Size at Most K

// Given an array of positive integers and a number K, find the length of the longest subarray with sum less than or equal to K.

// Input: nums = [4,2,1,7,8,1,2,8,1,0], K = 8

// Output: 3

// Explanation: Longest subarray with sum ≤ 8 is [1,2,5], [2,1,5], etc. Length = 3
// let nums = [4,2,1,7,8,1,2,8,1,0], k = 8;
// let nums = [10, 1, 2], k = 10;
// let nums = [1, 2, 3, 4, 5], k = 9;
// let nums = [1, 2, 3], k = 6;
// let nums = [5, 1, 1, 1], k = 5;
// let nums = [], k = 3;
// nums = [9, 10, 11], k = 5;
nums = [2,3,1,2,4,3], k = 7 
function getLongestSubarrayWithSumAtMostK(arr,k){
    if(!arr || arr.length < 1) {
        return 0;
    }
    let [currentSum, maxLen,start] = [0,0,0];
    
    for(let i = 0; i<arr.length; i++){
        currentSum += arr[i];
        while(currentSum > k) {
            currentSum -= arr[start];
            start++;
        }
        maxLen = Math.max(i - start + 1,maxLen);
    }
    
    return maxLen;
}
console.log(getLongestSubarrayWithSumAtMostK(nums,k))