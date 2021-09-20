
let bintang = '';
let b = 10
for (let i = 0; i <= b; i++) {
    for (let j = 0; j <= i; j++) {
        bintang += "* ";
    }
    bintang += "\n";
}

for (let i = 0; i < b; i++) {
    for (let j = b; j > i; j--) {
        bintang += "* ";
    }
    bintang += "\n";
}

console.log(bintang);