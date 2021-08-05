'use strict';

let skaitliukas = {
    _counter: 1
};
Object.defineProperty(skaitliukas, "value", {
    enumerable: false,
    get: function () {
        let ret = this._counter++;
        if (ret >= 3) {
            this._counter = 1;
        }
        return ret;
    }
});

for (const key in skaitliukas) {
    console.log(key, skaitliukas[key]);
}
skaitliukas._counter = 73;

console.log(skaitliukas.value);
console.log(skaitliukas.value);
console.log(skaitliukas.value);
console.log(skaitliukas.value);
console.log(skaitliukas.value);

// let zmogus = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis"
// };

// Object.defineProperty(zmogus, "pilnasVardas", {
//     configurable: true,
//     enumerable: true,
//     get: function() {
//         let ret = "";
//         if (this.vardas != undefined && this.vardas != null && typeof this.vardas == "string") {
//             ret = this.vardas;
//         }
//         if (this.pavarde != undefined && this.pavarde != null && typeof this.pavarde == "string") {
//             if (ret != "") {
//                 ret += " ";
//             }
//             ret += this.pavarde;
//         }
//         return ret;
//     },
//     set: function (value) {
//         let parts = value.split(" ");
//         if (parts.length == 0) {
//             delete this.vardas;
//             delete this.pavarde;
//         } else if (parts.length == 1) {
//             this.vardas = parts[0];
//             delete this.pavarde;
//         } else if (parts.length == 2) {
//             this.vardas = parts[0];
//             this.pavarde = parts[1];
//         } else {
//             this.pavarde = parts[parts.length - 1];
//             parts.pop();
//             this.vardas = parts.join(" ");
//         }
//     }
// });
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);
// zmogus.pilnasVardas = "Petras Jonas Antanas Petraitis";
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);

// for (const key in zmogus) {
//     console.log(key, zmogus[key]);
// }

// Object.defineProperty(zmogus, "pilnasVardas", {
//     // enumerable: false
//     writable: true
//     // ,
//     // value: "Dabar vardas ir pavadre bus atskirai"
// });
// console.log(zmogus);
// zmogus.pilnasVardas = "Antanas Antanaitis";
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);

// Object.defineProperty(zmogus, "pilnasVardas", {
//     configurable: true,
//     enumerable: true,
//     get: function() {
//         let ret = "";
//         if (this.vardas != undefined && this.vardas != null && typeof this.vardas == "string") {
//             ret = this.vardas;
//         }
//         if (this.pavarde != undefined && this.pavarde != null && typeof this.pavarde == "string") {
//             if (ret != "") {
//                 ret += " ";
//             }
//             ret += this.pavarde;
//         }
//         return ret;
//     },
//     set: function (value) {
//         let parts = value.split(" ");
//         if (parts.length == 0) {
//             delete this.vardas;
//             delete this.pavarde;
//         } else if (parts.length == 1) {
//             this.vardas = parts[0];
//             delete this.pavarde;
//         } else if (parts.length == 2) {
//             this.vardas = parts[0];
//             this.pavarde = parts[1];
//         } else {
//             this.pavarde = parts[parts.length - 1];
//             parts.pop();
//             this.vardas = parts.join(" ");
//         }
//     }
// });
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);


// zmogus.vardas = "Petras";
// console.log(zmogus.pilnasVardas);
// delete zmogus.vardas;
// console.log(zmogus.pilnasVardas);
// zmogus.vardas = "Antanas";
// zmogus.pavarde = null;
// console.log(zmogus.pilnasVardas);


// let o = {
//     savybe: "reiksme"
// };
// o.kitaSavybe = 5;
// Object.defineProperty(o, "kitaSavybe", {
//     configurable: true,
//     enumerable: true,
//     writable: true,
//     value: 5
// });

// console.log(o);
// Object.defineProperty(o, "darVienaSavybe", {
//     configurable: true,
//     enumerable: false,
//     writable: true,
//     value: "testas"
// });
// console.log(o);

// for (const key in o) {
//     console.log(key, o[key]);
// }
// console.log(o.darVienaSavybe);
// console.log("-----------");
// Object.defineProperty(o, "kitaSavybe", {
//     enumerable: false,
//     writable: false
// });
// console.log(o);

// for (const key in o) {
//     console.log(key, o[key]);
// }
// o.kitaSavybe = "Nieko nebus";
// console.log(o.kitaSavybe);
// console.log(o);

// o.darVienaSavybe = "KitasTestas";
// console.log(o);
// // delete o.darVienaSavybe;
// Object.defineProperty(o, "darVienaSavybe", {
//     enumerable: false
// });

// console.log(o);

// Object.defineProperty(o, "darVienaSavybe", {
//     enumerable: true
// });
// console.log(o);