// let o = {
//     test: 1
// };

// console.log(o);










function Obuolys() {
    this.dydis = 10;
    this.spalva = "zalias";
}

Obuolys.prototype.nokstam = function () {
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

Obuolys.prototype.arPrinokes = function () {
    if (this.dydis >= 150 && this.spalva == "raudonas") {
        return true;
    } else {
        return false;
    }
};

let o1 = new Obuolys();
let o2 = new Obuolys();

console.log(o1);
console.log(o2);

while (!o1.arPrinokes()) {
    o1.nokstam();
    console.log(o1);
}
console.log("Valgom", o1);
console.log("O sitas dar neprinokes", o2);

console.log(o2.arPrinokes());

o2.arPrinokes = function () {
    console.log("sitas visada prinokes");
    return true;
}

console.log(o2.arPrinokes());

console.log(o1.arPrinokes());










function Masina(pavadinimas, maxGreitis) {
    this.pavadinimas = pavadinimas;
    this.maxGreitis = maxGreitis;
    this.greitis = 0;
    this.kelias = 0;
}

Masina.prototype.gazas = function (kiek) {
    this.greitis += kiek;
    if (this.greitis > this.maxGreitis) {
        this.greitis = this.maxGreitis;
    }
};

Masina.prototype.stabdis = function (kiek) {
    this.greitis -= kiek;
    if (this.greitis < 0) {
        this.greitis = 0;
    }
};

Masina.prototype.vaziuojam = function () {
    this.kelias += this.greitis;
};




function SportineMasina(pavadinimas, maxGreitis) {
    Masina.call(this, pavadinimas, maxGreitis);
    this.spoileris = false;
}

// SportineMasina.prototype.gazas = function (kiek) {
//     this.greitis += kiek;
//     if (this.greitis > this.maxGreitis) {
//         this.greitis = this.maxGreitis;
//     }
// };

// SportineMasina.prototype.stabdis = function (kiek) {
//     this.greitis -= kiek;
//     if (this.greitis < 0) {
//         this.greitis = 0;
//     }
// };

// SportineMasina.prototype.vaziuojam = function () {
//     this.kelias += this.greitis;
// };

SportineMasina.prototype = Object.create(Masina.prototype);
SportineMasina.prototype.constructor = SportineMasina;

SportineMasina.prototype.pakeiskSpoilerioPozicija = function () {
    if (this.greitis > this.maxGreitis * .6) {
        this.spoileris = true;
    } else {
        this.spoileris = false;
    }
}