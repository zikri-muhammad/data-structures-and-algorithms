function isVocal(str){
    let vok = '';
    let constonan = '';
    for (const index of str) {
        if(index === 'a' || index === 'i' || index === 'u' || index === 'e' || index === 'o'){
            vok += index
        }else{
            constonan += index
        }
    }

    for (let i = 0; i < vok.length; i++) {
        console.log(vok.charAt(i));
    }

    for (let i = 0; i < constonan.length; i++) {
        console.log(constonan.charAt(i));
    }
}

console.log(isVocal('javascript'))