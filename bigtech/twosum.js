/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numsArray = [1, 2, 7, 9, 3];
const targetToFind = 11;

// solusion one

// const findTwoSum = (nums, target) => {
//     for (let p1 = 0; p1 < nums.length; p1++) {
//         const numberToFind = target - nums[p1];
//         // console.log(numberToFind);
//         console.log(p1);
//         for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//             if (numberToFind === nums[p2]) {
//                 return [p1, p2]
//             }
//         }
//     }
//     return null
// }



// optimal solusion
// const findTwoSum = (nums, target) => {
//     const numMap = {};
//     for (let p1 = 0; p1 < nums.length; p1++) {
//         const currentNumMap = numMap[nums[p1]]
//         console.log(currentNumMap)
//         if (currentNumMap >= 0) {
//             return [currentNumMap, p1]
//         }else{
//             const numberToFind = target - nums[p1];
//             numMap[numberToFind] = p1
//         }
//     }
//     return null
// }

const findTwoSum = (nums, target) => {
    const numMap = {};
    for (let p = 0; p < nums.length; p++) {
        const currentNumMap = numMap[nums[p]];
        if (currentNumMap >= 0) {
            return [currentNumMap, p];
        }else{
            const numberToFind = target - nums[p];
            numMap[numberToFind] = p
        }  
    }
    return null
}




console.log(findTwoSum(numsArray, targetToFind));