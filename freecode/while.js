const array = []
let temp = '0'
let i = 0;
while (i < 5) {
    array.push(i)
    console.log(temp + '\n')
    temp += '0'
    i++
}


console.log(array)
console.log(temp)