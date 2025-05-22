/* 2. Longest Subarray with Sum Divisible by K
Problem: Find the length of the longest subarray with sum divisible by k.

Input:
nums = [2, 7, 6, 1, 4, 5]
k = 3

Output:
4
(Explanation: Subarray [7, 6, 1, 4] has sum 18 which is divisible by 3.) */

const nums = [2, 7, 6, 1, 4, 5,3];
const k = 3;

function subarrayDivisibleByK(arr,k){
    let prefixMap = new Map();
    prefixMap.set(0,-1);
    let currentSum = 0;
    let result = [];
    let start=0;
    let end = 0;
    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        let mod = currentSum % k;
        if(mod < 0 ) mod = (mod + k) % k;
        if(prefixMap.has(mod)){
            start = prefixMap.get(mod);
            end = i;
            let tempResult = arr.slice(start+1,end+1);
            if(tempResult.length > result.length) result = tempResult;
        }
        else prefixMap.set(mod, i);
    }
    return result;
}
// console.log("subarrayDivisibleByK: ",subarrayDivisibleByK(nums,k));


// Problem Statement:
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum is divisible by k.
// Input:
// nums = [4, 5, 0, -2, -3, 1], k = 5

// Output:
// 7
// Explanation:
// There are 7 subarrays with sum divisible by 5:
// [4, 5, 0, -2, -3, 1],[5, 0, -2, -3], [5], [5, 0], [0], [0, -2, -3], [-2, -3]
// const nums1 = [4, 5, 0, -2, -3, 1];
const nums1 = [4, 5];
const k1 = 5;
function countSubarrayDivisibleByK(arr,k){
    let count = 0;
    let currentSum = 0;
    let prefixMap = new Map();
    prefixMap.set(0,0);
    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        let mod = currentSum % k;
        if(mod < 0 ) mod = (mod + k) % k;
        if(prefixMap.has(mod)){
            count += prefixMap.get(mod);
        }
        prefixMap.set(mod, (prefixMap.get(mod) || 0) + 1);
    }
    return count;
}
console.log("subarrayDivisibleByK: ",countSubarrayDivisibleByK(nums1,k1));