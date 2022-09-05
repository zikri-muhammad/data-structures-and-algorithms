// let result = '0'
// for (let index = 0; index < 5; index++) {
//     console.log(result + '\n')
//     result += '0'
// }

// for (let index = 1; index <= 9; index += 2) {
//     console.log(index)
    
// }

// for (let index = 9; index >= 1; index -= 2) {
//     console.log(index) 
// }

// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for (let index = 0; index < myArr.length; index++) {
//     total += myArr[index]
// }

// console.log(total)
// console.log(result)

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr[index].length; j++) {
            product *= arr[index][j]    
        }
    }
    // Only change code above this line
    return product;
}
  
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[1], [2], [3]]));