const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergrSort(array) {
    if (array.length === 1) {
        return array;
    }

    // split array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    console.log('left:', left)
    console.log('right:', right)


    return merge(
        mergrSort(left),
        mergrSort(right)
    )
}


function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer =  mergrSort(numbers)
console.log(answer);