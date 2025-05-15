// Problem: Maximum Subarray Sum (Kadane’s Algorithm)
// Statement:
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Explanation: [4,-1,2,1] has the largest sum = 6.
 
let nums = [-2,1,-3,4,-1,2,1,-5,4];

function getMaxSubarraySum(nums){
    let currentSum = nums[0];
    let maxSum = nums[0];
    let resultArr = [nums[0]];
    let tempArr = [nums[0]];
    if(nums.length <= 0) return 0;
    for(i = 1; i < nums.length; i++){
        if(nums[i] > (currentSum + nums[i])){
            currentSum = nums[i];
            tempArr = [nums[i]];
        }
        else {
            currentSum += nums[i];
            tempArr.push(nums[i]);
        }

        if(maxSum < currentSum) {
            maxSum = Math.max(maxSum, currentSum);
            resultArr = [...tempArr];
        }
        
    }
    console.log(resultArr);
    return maxSum;
}

console.log(getMaxSubarraySum(nums));

// function getMaxSubarraySum(nums){
//     let sum = nums[0]; // -2
//     let resultArr = [-2];
//     let isBroken = false;
    
//     nums.forEach((num, i)=>{
//         let newSum = sum + num; // -3 + 1 => newSum = -2 , sum = 1, num = -3
//         if(isBroken && sum < num) {
//             sum = num;
//             resultArr = [num];
//             isBroken = false;
//         }
//         else if(!isBroken  && sum < num){
//             sum = newSum;
//             resultArr.push(num);
//         }
//         else if(newSum < sum){
//             // dont do anything proceed
//             isBroken = true;
//         }
//         else if(newSum > sum){
            
//         }
//     })
//     console.log(resultArr);
//     console.log(sum);

//     return sum;
// }
// console.log(getMaxSubarraySum(nums));