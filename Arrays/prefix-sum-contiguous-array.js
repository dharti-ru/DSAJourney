/* Contiguous Array
Problem: Find the maximum length of a contiguous subarray with an equal number of 0 and 1.
Trick: Convert 0s to -1s, then use prefix sum.

Input:
nums = [0, 1, 0, 1, 1, 0, 0]

Output:
6
(Explanation: The subarray [0, 1, 0, 1, 1, 0] has equal number of 0s and 1s.) */
const nums = [0, 1, 0, 1, 1, 0, 0];
// nums = [0, 1, 1, 0, 1, 1, 1, 0];
// nums = [0, 1];
function getMaxLength(nums) {
    let maxLength = 0;
    let prefixSum = 0;
    const sumIndexMap = new Map();
    sumIndexMap.set(0,-1);

    for(let i = 0; i < nums.length; i++){
        prefixSum += (nums[i] === 0 ? -1 : 1);

        if(sumIndexMap.has(prefixSum)){
            let startIndex = sumIndexMap.get(prefixSum);
            let difference = i - startIndex;
            maxLength = Math.max(maxLength, difference);
        }
        else sumIndexMap.set(prefixSum, i);
    }

    return maxLength;
}
console.log(getMaxLength(nums))