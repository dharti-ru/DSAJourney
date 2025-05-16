// Problem:
// Given an array nums, and two indices L and R, return the sum of elements between L and R (inclusive) in constant time after preprocessing.
// Example:
// nums = [2, 4, 1, 7, 9, 3]
// L = 2, R = 4  
// Output: 1 + 7 + 9 = 17
// Try:

// Building the prefix sum array.

// Writing a function rangeSum(L, R) that returns the sum from index L to R in O(1) time.
let nums = [2, 4, 1, 7, 9, 3];
let L = 2, R = 4;
let prefixArr = getPrefixArr(nums);
function getPrefixArr(nums){
    let prefixArr = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        prefixArr[i] = prefixArr[i-1] + nums[i];
    }
    return prefixArr;
}

function rangeSum(L, R) {
    if(L === 0) return prefixArr[R];
    return prefixArr[R] - prefixArr[L-1];;
}
console.log("rangeSum: ",rangeSum(L,R));


// 🔸 Problem: Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// Input: nums = [1, 4, 1,1,2,3 ], k = 3  
// Output: 2  
// Subarrays are: [1,1] (first two), [1,1] (last two)
// Input: nums = [1, 2, 3], k = 3  
// Output: 2  
// Subarrays: [1,2], [3]
let numsArr = [1, 4, 1,1,2,3];
let k = 3;
let currentSum = 0, count = 0;
let premixMap = new Map();
function getSubarraySumEqualK(numsArr,k){
    premixMap.set(0,1)
    for(let i = 0; i < numsArr.length; i++){
        currentSum += numsArr[i];
        let checkDifference = currentSum - k;
        if(premixMap.has(checkDifference)) {
            count += premixMap.get(checkDifference);
        } premixMap.set(currentSum, (premixMap.get(currentSum) || 0) + 1);
    }
    return count;
}
console.log("getSubarraySumEqualK: ",getSubarraySumEqualK(numsArr,k));
// function getSubarraySumEqualK(numsArr,k){
//     let count = 0
//     let currentSum = numsArr[0];
//     let resultArr = numsArr[0];
//     let tempArr = numsArr[0];
//     for(let i = 1; i < numsArr.length; i++){
//         if((currentSum + numsArr[i]) == k || numsArr[i] == k) {
//             count++;
//             currentSum = numsArr[i];
//         }
//         else if((currentSum + numsArr[i]) < k ) {
//             currentSum += numsArr[i];
//         }
//         else if((currentSum + numsArr[i]) > k) {
//             currentSum = numsArr[i];
//         }
//         /* else if(numsArr[i] > k) 
//         {
//             currentSum = numsArr[i];
//         }
//         else if(numsArr[i] < k){

//         } */
//     }

//     return count;
// }


