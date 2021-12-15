/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const comp = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (comp[nums[i]] >= 0) {
//             return [comp[nums[i]], i]
//         }
//         comp[target-nums[i]] = i        
//     }
// };

// brute solusion
// var findTwoSum = function(nums, target){
//     for (let i = 0; i < nums.length; i++) {
//         const numberToFind = target - nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             if (numberToFind === nums[j]) {
//                 return [i, j]
//             }
            
//         }
//     }
//     return null
// }

// optimal solusion

var findTwoSum = function(nums, target){
    const numsMap = {}
    for (let i = 0; i < nums.length; i++) {
        const currentNumsVal = numsMap[nums[i]];
        console.log(currentNumsVal);
        if (currentNumsVal >= 0) {
            return [currentNumsVal, i]
        }else{
            const numTofind = target - nums[i]
            numsMap[numTofind] = i
        }
    }
    return null
}

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
const nums = [3,2,4]
const target = 6
// console.log(twoSum(nums, target))
console.log(findTwoSum(nums, target))