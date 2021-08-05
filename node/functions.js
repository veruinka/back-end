"use strict";

function masyvoVidurkis(m) {
    let v = 0;
    for (const e of m) {
        v += e;
    }
    v = v / m.length;
    return v;
}






console.log(suma(1, 2));
console.log(suma);

let kita = suma;

console.log(kita(3, 4));
console.log(kita);

console.log("-------");
suma = "jau ne funkcija";

console.log(suma);
console.log(kita);

function suma(a, b) {
    return a + b;
}





function calc(veiksmas) {
    function suma(a, b) {
        return a + b;
    }
    function atimtis(a, b) {
        return a - b;
    }
    function kvadratas(a) {
        return a * a;
    }
    if (veiksmas == "sum") {
        return suma;
    } else if (veiksmas == "sub") {
        return atimtis;
    } else if (veiksmas == "sqr") {
        return kvadratas;
    }
}

console.log(calc("sqr")(5));
console.log(calc("sum")(10, 15));






function sudetis(a, b) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("arguments:", arguments);

    let suma = 0;
    for (const r of arguments) {
        suma += r;
    }
    return suma;
};

console.log(sudetis(5, 6));
console.log(sudetis(15, 16, 17));








function inc(sk) {
    sk++;
    console.log(sk);
}
let a = 2;
inc(a);
console.log(a);








function ipilk(puodukas, kiek = 0) {
    puodukas.kiekis += kiek;
}
let p = {
    spalva: "rudas",
    turis: 300,
    kiekis: 0
};
ipilk(p, 100);
console.log(p);










function calc(veiksmas) {
    function suma(a, b) {
        console.log(r);
        return a + b;
    }
    function atimtis(a, b) {
        console.log(r);
        return a - b;
    }
    function kvadratas(a) {
        console.log(r);
        return a * a;
    }
    let r = Math.random();
    if (veiksmas == "sum") {
        return suma;
    } else if (veiksmas == "sub") {
        return atimtis;
    } else if (veiksmas == "sqr") {
        return kvadratas;
    }
}

let v1 = calc("sub");
let v2 = calc("sub");
console.log(v1(32, 21));
console.log(v2(15, 1));









function suma(a, b) {
    console.log(r);
    return a + b;
}
function atimtis(a, b) {
    console.log(r);
    return a - b;
}
function kvadratas(a) {
    console.log(r);
    return a * a;
}

function calc(veiksmas, a, b) {
    let r = Math.random();
    return veiksmas(a, b);
}

console.log(calc(kvadratas, 5));
console.log(calc(suma, 5, 7));









let puodukas = {
    spalva: "rudas",
    turis: 300,
    kiekis: 80,
    ipilk: function (kiek) {
        this.kiekis += kiek;
    },
    isgerk: function (kiek) {
        this.kiekis -= kiek;
    }
};

console.log(puodukas);

puodukas.ipilk(100);

console.log(puodukas);






console.log(global);

let fi = puodukas.ipilk;

fi(101);

console.log(global);

console.log(puodukas);









function labas(vardas) {
    let pasisveikinimas = "Labas " + vardas;
    console.log(pasisveikinimas);
}

labas("Alius");

let ko = new labas("Petras");

console.log(ko);
console.log(ko.pasisveikinimas);