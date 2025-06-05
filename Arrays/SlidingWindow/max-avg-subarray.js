// Sliding Window Problem: Maximum Average Subarray I
// Problem:
// You are given an integer array nums consisting of n elements, and an integer k.

// Your task is to find the maximum average value of any contiguous subarray of length k.
// Return the answer as a float. You can assume that the input will always have at least one subarray of length k.

// 🧪 Example:
// Input: nums = [1,12,-5,-6,50,3], k = 4  
// Output: 12.75  
// Explanation: Max average subarray is [12,-5,-6,50] → Sum = 51, Average = 51/4 = 12.75
// 💡 Constraints:
// 1 <= nums.length <= 10⁵
// -10⁴ <= nums[i] <= 10⁴
// 1 <= k <= nums.length

let nums = [1,12,-5,-6,50,3], k = 4;

function getMaxAvgSubArray(arr,k) {
    let currentSum = arr.reduce((acc,curr,index)=> {return (index < k) ? acc += curr : acc;},0);
    let maxSum = currentSum;
    if(arr.length < 1) return false;
    for(let i = 1; i <= arr.length - k ; i++){
        currentSum = currentSum - arr[i-1] + arr[i+k-1];
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum / k;
}
console.log(getMaxAvgSubArray(nums,k))