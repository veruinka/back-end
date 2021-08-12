// function Puodukas () {
//     this.spalva = "baltas";
//     this.turis = 150;
//     this.kiekis = 0;
// }

// Puodukas.prototype.ipilk = function(kiek) {
//     this.kiekis += kiek;
//     // this.kiekyra();
// };
// Puodukas.prototype.kiekyra = function() {
//     console.log(this.kiekis);
// };

// class KlasiskasPuodukas {

//     kiekyra() {
//         console.log(this.kiekis);
//     }
// }

// let p = new Puodukas();
// let p2 = new Puodukas();

// console.log(p);
// p.ipilk(100);
// console.log(p);
// p.kiekyra();

// p2.ipilk(20);
// console.log(p);
// console.log(p2);
// p.kiekyra();

let suma = function (a, b) {
    console.log("a", a);
    console.log("b", b);
    console.log("arguments", arguments);
    console.log("this", this);
    return a + b;
};

let sumaArrow = (a, b) => {
    console.log("a", a);
    console.log("b", b);
    console.log("arguments", arguments);
    console.log("this", this);
    return a + b;
};

let sumaArrowTrumpas = (a, b) => a + b;

let kvadratas = a => a * a;

let atsitiktinis = () => Math.trunc(Math.random() * 10 + 1);

// console.log(suma(1, 2, 3, 4));
console.log(sumaArrow(1, 2, 3, 4));

// console.log(this);
// console.log(arguments);
// console.log(sumaArrowTrumpas(1, 2));
// console.log(kvadratas(3));
// console.log(atsitiktinis());