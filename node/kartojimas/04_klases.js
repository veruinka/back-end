function Flom(sp, st) {
    this.spalva = sp;
    this.storis = st;
}
Flom.prototype.rasom = function() {
    console.log(`rasom ${this.spalva} ${this.storis} storio`);
}

let f1 = new Flom("zalias", 4);

f1.rasom();

function Zmogus(vardas, pavarde, alga) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.alga = alga;
}
Zmogus.prototype.labas = function() {
    console.log(`Labas ${this.vardas} ${this.pavarde}`);
}

let z = new Zmogus("Jonas", "Jonaitis", 1500.53);
z.labas();

let z1 = {
    vardas: "Petras",
    pavarde: "Petraitis",
    alga: 800
};

console.log(z);

class Persona {

    constructor(vardas, pavarde, alga) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.alga = alga;
    }

    labas() {
        console.log(`Labas ${this.vardas} ${this.pavarde}`);
    }
}

let p = new Persona("Antanas", "Antanaitis", 123.12);
console.log(p);
p.labas();

function Studentas(vardas, pavarde, mokykla) {
    // Persona.call(this, vardas, pavarde, 0);
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.alga = 0;
    this.mokykla = mokykla;
}
Studentas.prototype = Object.create(Persona.prototype);
Studentas.prototype.constructor = Studentas;


let st = new Studentas("Vardenis", "Pavardenis", "BIT");
console.log(st);
st.labas();

// class Studentas extends Persona {

// }