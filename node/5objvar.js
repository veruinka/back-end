"use strict";
let puodukas = {
    spalva: "rudas",
    turis: 300,
    kiekis: 80
};
let kitasPuodukas = {
    spalva: "rudas",
    turis: 300,
    kiekis: 80
};
console.log(puodukas);
puodukas.kiekis += 100;
console.log(puodukas);
puodukas.spalva = "zalias";
console.log(puodukas.spalva);


let p = puodukas;
p.kiekis += 23;
p = kitasPuodukas;
p.kiekis = 0;
p.spalva = "melynas";
console.log(puodukas);
console.log(kitasPuodukas);