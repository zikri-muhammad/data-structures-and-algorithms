// var object1 = {value : 10};
// var object2 = object1
// var object3 = {value : 10};

// /* 
// * context vs scope
// */

// const object4 = {
//     a: function() {
//         console.log(this)
//     }
// }


// /* 
// * instantiation
// */

// class Player {
//     constructor(name, type){
//         console.log(this);
//         this.name = name
//         this.type = type
//     }
//     introduce(){
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
//     }
// }

// class Wizzard extends Player {
//     constructor(name, type){
//         super(name, type)
//     }
//     play(){
//         console.log(`Weeeeeeee I'm ${this.type}`)
//     }
// }


// const wizzard1 = new Wizzard('Shuna', 'Healer');
// const wizzard2 = new Wizzard('diablo', 'Dark Magic');

// console.log(wizzard1);
// console.log(wizzard2);
// console.log(wizzard1.play());
// console.log(wizzard2.introduce());


class Parner {
    constructor(name, type){
        this.name = name
        this.type = type
    }
    introduce(){
        console.log(`Hi My name ${this.name} type parner ${this.type}`); 
    }
}

class Colleague extends Parner {
    constructor(name, type){
        super(name, type)
    }
    work(){
        console.log(`We Are ${this.type}`);
    }
}

const play = new Colleague('muhammad zikri', 'oyi')
const play1 = new Colleague('muhammad zikri', 'oyi')
console.log(play);
console.log(play1);
console.log(play.work());
console.log(play1.introduce());