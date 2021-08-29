'use strict';


/*
Masinu lenktynes
 
masyvas is 8 masinu (2 is ju sportines)
 
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
jei masina sportine, su tikimybe 50% pakeis spoilerio pozicija
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis
 
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
 
pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia mazejimo tvarka
 
*)
komentatorius
kas 100 km reikia atspausdinti lyderio pavadinima ir nuvaziuota atstuma
 
*/



class TransportoPriemone {

    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
    }
}


class Masina extends TransportoPriemone {

    constructor(pavadinimas, maxGreitis) {
        super(pavadinimas);
        this.maxGreitis = maxGreitis;
        this.greitis = 0;
        this.kelias = 0;
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

    static atstumasTarpMasinu(m1, m2) {
        console.log(this);
        return m1.kelias - m2.kelias;
    }

    rendGreitis() {
        if (this.greitis >= 0) {
            this.greitis += Math.random
        }

    }
}

Masina.prototype._super = TransportoPriemone.prototype;

class SportineMasina extends Masina {

    constructor(pavadinimas, maxGreitis) {
        super(pavadinimas, maxGreitis);
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
}

function randSpoiler() {
    if (Math.random > .5) {
        return true
    } else {
        return false
    };
}

function randGreitis() {
    const rand = Math.random();
    const nuo = -6;
    const iki = 5;
    return Math.trunc(rand * (iki - nuo + 1) + nuo);
}

SportineMasina.prototype._super = Masina.prototype;


const masinos = [
    new Masina('BMW', 210),
    new Masina('Audi', 180),
    new Masina('Ford', 190),
    new Masina('Honda', 195),
    new Masina('Kia', 205),
    new Masina('Mazda', 180),
    new SportineMasina('Melkus', 215),
    new SportineMasina('Jaguar', 225)
];

let nuvaziuotaMax = 0;
let lyderis = '';
let komentaras = 100;

do {
    masinos.forEach(e => {
        let greicioPokytis = randGreitis();
        if (e instanceof SportineMasina) {
            randSpoiler();
        }
        if (greicioPokytis < 0) {
            greicioPokytis = -greicioPokytis;
            e.stabdis(greicioPokytis);
        } else {
            e.gazas(greicioPokytis);
        }
        e.vaziuojam();
        if (e.kelias > nuvaziuotaMax) {
            nuvaziuotaMax = e.kelias;
            lyderis = e.pavadinimas;
        }
    })
    if (nuvaziuotaMax > komentaras) {
        console.log(`Komentatorius: lyderiauja ${lyderis}, kuris nuvaziavo ${nuvaziuotaMax}`);
        komentaras += 100;
    }
} while (nuvaziuotaMax < 1000);

masinos.sort((a, b) => b.kelias - a.kelias);
masinos.forEach(e => console.log(e.pavadinimas, e.kelias));