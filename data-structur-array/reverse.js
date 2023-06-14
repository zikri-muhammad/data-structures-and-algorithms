// function reverse(str){
//     // check input 
//     if(!str || typeof str != 'string' || str.length < 2) 
//     return str;

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i])
        
//     }

//     return backwards.join(''); 
// }


// function reverse2(str){
//     // check for valid input
//     return str.split('').reverse().join('');
// }

// const reverse3 = str => [...str].reverse().join('');

// const reverses = reverse('Muhammad Zikri')
// const reverses2 = reverse2('Muhammad Zikri')
// const reverses3 = reverse2('Muhammad Zikri')
// console.log(reverses)
// console.log(reverses2)
// console.log(reverses3)


// const reverse = (str) => {
//     if (!str || typeof str != 'string' || str < 0) return str
    
//     // const backwards = []
//     let reversedStr = ''
//     const lastIndex = str.length - 1
//     console.log(lastIndex);
//     for (let index = lastIndex; index >= 0; index--) {
//         reversedStr += str[index]
//     }
    
//     return reversedStr
// }

const reverse = (str) => {
    if (!str || typeof str != 'string' || str < 0) return str
    
    const backwards = []
    const lastIndex = str.length - 1
    console.log(lastIndex);
    for (let index = lastIndex; index >= 0; index--) {
        backwards.push(str[index])
    }
    
    return backwards.join('')
}

console.log(reverse('muhammad zikri'));