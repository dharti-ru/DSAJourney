// Problem: "Count the Target Sum Pairs"
// Given an array of integers nums and an integer target, return the number of unique pairs (i, j) such that nums[i] + nums[j] == target and i < j.

// Example:

// Input: nums = [1, 2, 3, 2, 1], target = 4  
// Output: 2  [1,1,2,2,3]
// Explanation: The pairs are (1,3) → 1+3=4 and (2,2) → 2+2=4

const nums = [1,1,3,3];
const target = 4;
function getCountOfTargetSumPairs(nums,target){
    nums.sort((a,b) => a - b );
    
    let [left,right,count] = [0,nums.length - 1,0];
    
    while(left < right){
        let currentSum = nums[left] + nums[right];
        if(currentSum === target) {
            count++; left++; right--;
            while (left < right && nums[left] === nums[left - 1]) left++;
            while (left < right && nums[right] === nums[right + 1]) right--;
        }
        
        else if(currentSum < target) left++;
        else if(currentSum > target) right--;
    }
    return count;
}
//console.log("getCountOfTargetSumPairs",getCountOfTargetSumPairs(nums,target));
console.log("getCountOfTargetSumPairs2",getCountOfTargetSumPairs2(nums,target));

function getCountOfTargetSumPairs2(nums,target){
    let complementMap = new Map();
    let resultCount = 0;
    for(let num of nums){
        let complement = target - num;
        if(complementMap.has(num) && complementMap.get(num) === 1) {
            resultCount++;
            // complementMap.set(num,"x");
            complementMap.set(num, 0);
            complementMap.set(complement, 0);
        }
        else if (!complementMap.has(complement)) complementMap.set(complement, 1);
    }
    return resultCount;
}

console.log(getCountOfTargetSumPairs2([1,2,3,2,1], 4));       // 2
console.log(getCountOfTargetSumPairs2([2,2,2,2], 4));         // 1
console.log(getCountOfTargetSumPairs2([1,1,3,3], 4));         // 1
console.log(getCountOfTargetSumPairs2([-3,-1,4,5], 1));       // 1
console.log(getCountOfTargetSumPairs2([0,0,0,0], 0));         // 1
console.log(getCountOfTargetSumPairs2([], 5));                // 0
console.log(getCountOfTargetSumPairs2([5], 5));               // 0