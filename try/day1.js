// first big o notation 

const nemo = ['nemo'];
const everyone = ['minato', 'jirya', 'sasuke', 'kabuto', 'itachi', 'naruto', 'hinata', 'sakura', 'shikamaru', 'rock lee'];
const large = new Array(10000).fill('nemo');

function findNemo(array) {

    for(let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found Nemo!!');
        }
    }

}


findNemo(large); // 0(n) => linear time