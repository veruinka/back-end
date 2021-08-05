function Obuolys() {
    this.dydis = 10;
    this.spalva = "zalias";
    this.nokstam = function () {
        if (this.dydis < 150) {
            this.dydis += Math.trunc(Math.random() * 80 + 20);
        } else {
            if (this.spalva == "zalias") {
                this.spalva = "geltonas";
            } else if (this.spalva == "geltonas") {
                this.spalva = "raudonas";
            }
        }
    };
    this.arPrinokes = function () {
        if (this.dydis >= 150 && this.spalva == "raudonas") {
            return true;
        } else {
            return false;
        }
    };
}

let o1 = new Obuolys();
let o2 = new Obuolys();

while (!o1.arPrinokes()) {
    o1.nokstam();
    console.log(o1);
}
console.log("Valgom", o1);
console.log("O sitas dar neprinokes", o2);















class Butas {
    constructor(nr, plotas) {
        this.nr = nr;
        this.plotas = plotas;
    }
}

class Namas {
    constructor(aukstai, laiptines, spalva = "pilkas") {
        this.aukstai = aukstai;
        this.laiptines = laiptines;
        this.spalva = spalva;
        this.butai = [];
        for (let i = 1; i <= aukstai * laiptines * 3; i++) {
            this.butai.push(new Butas(i, Math.trunc(Math.random() * 100 + 20)))
        }
    }
}
let n1 = new Namas(5, 3);
let n2 = new Namas(9, 2);
let n3 = new Namas(5, 5, "zalias");
let n4 = new Namas(7, 2, "raudonas");

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);









