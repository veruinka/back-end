"use strict";

class Vezimas {
    constructor(av) {
        this.arklioVardas = av;
    }
}

class TransportoPriemone {

    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    beep() {
        console.log(this.pavadinimas + " pypsena labai garsiai");
    }

}

class Masina extends TransportoPriemone {

    spalva;
    #temp;

    constructor(pavadinimas, maxGreitis, spalva) {
        super(pavadinimas);
        if (typeof spalva === "string") {
            this.spalva = spalva;
        }
        this.maxGreitis = maxGreitis;
        this.greitis = 0;
        this.kelias = 0;
        this.#temp = 30;
    }

    get kondicionierius() {
        return this.#temp;
    }

    set kondicionierius(value) {
        if (value >= 16 && value <= 30) {
            this.#vidiniaiSkaiciavimai();
            this.#temp = value;
        }
    }

    #vidiniaiSkaiciavimai() {
        console.log("paskaiciuojam kaip stipriai reikia pusti");
    }

    gazas(kiek) {
        this.greitis += kiek;
        if (this.greitis > this.maxGreitis) {
            this.greitis = this.maxGreitis;
        }
    }

    stabdis(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }

    vaziuojam() {
        this.kelias += this.greitis;
    }

    beep() {
        console.log("Masina " + this.pavadinimas + " sako beep");
    }

    static atstumasTarpMasinu(m1, m2) {
        console.log(this);
        return m1.kelias - m2.kelias;
    }
}
Masina.prototype._super = TransportoPriemone.prototype;

class SportineMasina extends Masina {

    constructor(pavadinimas, maxGreitis) {
        super(pavadinimas, maxGreitis);
        // this.#temp = 25;
        this.spoileris = false;
    }

    pakeiskSpoilerioPozicija() {
        if (this.greitis > this.maxGreitis * .6) {
            this.spoileris = true;
        } else {
            this.spoileris = false;
        }
    }

    gazas(kiek) {
        if (!this.spoileris) {
            super.gazas(kiek * 2);
            // Masina.prototype.gazas.call(this, kiek * 2);
            // this.super.gazas.call(this, kiek * 2);
        } else {
            super.gazas(kiek);
            // this.super.gazas.call(this, kiek);
        }
    }

    stabdis(kiek) {
        if (this.spoileris) {
            super.stabdis(kiek * 2);
        } else {
            super.stabdis(kiek);
        }
    }

    beep() {
        // super.beep();
        this._super._super.beep.call(this);
        console.log("sportinis beep");
    }

}
SportineMasina.prototype._super = Masina.prototype;

let porsas = new SportineMasina("Porsas", 300);
let bmw = new Masina("BMW", 260, "sidabrine");

console.log(porsas.kondicionierius);
porsas.kondicionierius = 18;

porsas.kondicionierius++;

console.log(porsas.kondicionierius);
console.log(porsas);
porsas.kondicionierius = 48;
console.log(porsas.kondicionierius);

// porsas.#vidiniaiSkaiciavimai();

console.log(Object.getOwnPropertyNames(porsas));
console.log(Object.getOwnPropertyNames(Masina.prototype));


// porsas.kelias = 150;
// bmw.kelias = 125;

// console.log(Masina.atstumasTarpMasinu(porsas, bmw));

// console.log(Masina instanceof Function);
// console.log(Masina instanceof Object);

// console.log(Masina.prototype);
// console.log(Object.getOwnPropertyNames(Masina.prototype));
// console.log(Object.getOwnPropertyNames(Masina));

// let props = Object.getOwnPropertyDescriptors(SportineMasina.prototype);
// for (const prop in props) {
//     console.log(prop, props[prop]);
//     console.log("---------");
// }
// console.log("================");

// let visaiNeObjektas = Object.create(null);
// visaiNeObjektas.labas = "Hello";
// console.log(visaiNeObjektas);

// console.log(porsas instanceof Object);
// console.log({} instanceof Object);
// console.log(visaiNeObjektas instanceof Object);

// let fordas = new Masina("Ford", 240);
// fordas.pakeiskSpoilerioPozicija = function() {
//     console.log("prie Fordo priklijavom lipdukus");
// }

// let neMasina = {
//     pakeiskSpoilerioPozicija() {
//         console.log("plasnojam spoileriais");
//     }
// };

// // console.log(porsas);
// // porsas.beep();
// // console.log(typeof SportineMasina);
// // console.log(typeof porsas);
// arSportine(porsas);
// arSportine(fordas);
// arSportine(neMasina);
// kasCia(porsas);
// kasCia({vadas: "Jonas"});
// kasCia(new Vezimas("Beris"));
// kasCia(fordas);
// kasCia(345);

// function arSportine(obj) {
//     if (obj && typeof obj === "object") {
//         if (typeof obj.pakeiskSpoilerioPozicija === "function") {
//             console.log("pakeiciau");
//             obj.pakeiskSpoilerioPozicija();
//             return;
//         }
//     }
//     console.log("ner kaip pakeist");
// }


// function kasCia(obj) {
//     if (obj && typeof obj === "object") {
//         if (obj instanceof Vezimas) {
//             console.log("Vezima traukia " + obj.arklioVardas);
//         } else {
//             if (obj instanceof Masina) {
//                 console.log(obj.pavadinimas);
//                 if (obj instanceof SportineMasina) {
//                     console.log(obj.spoileris);
//                 }
//             } else {
//                 console.log("Tai ne masina ir ne vezimas");
//             }
//         } 
//     } else {
//         console.log("cia visai ne objektas");
//     }
// }