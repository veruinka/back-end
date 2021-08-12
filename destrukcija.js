// new Number(5)
// new Boolean(true)
// new String("viso gero")

function labas(
    {
        firstName: vardas = "bevardis",
        pavarde = "bepavardis",
    } = {
            firstName: "default vardas",
        }
) {
    console.log(arguments);
    console.log("Labas", vardas, pavarde);
}

let vardas = "Jonas";
let pavarde = "Jonaitis";
let zmogus = {
    firstName: vardas,
    pavarde,
    labas: function () {
        console.log("labas", this.firstName, this.pavarde);
    },
    ate() {
        console.log("ate", this.firstName, this.pavarde);
    },
    gimMetai: 1999,
};
labas(zmogus);
let zmogus1 = {
    firstName: "Petras",
    pavarde: "Petraitis",
};
labas(zmogus1);

let suo = {
    vardas: "Lordis",
    veisykla: "Anrebri",
    gimMetai: 2015
};
labas(suo);

let z3 = {
    firstName: "Antanas",
};
labas(z3);

labas({});
console.log("-----`");
labas(5);
labas(true);
labas("viso gero");
labas(() => { });
console.log("=========");
labas(undefined);
console.log("!!!!!!!!!!!");
// labas(null);

// console.log(zmogus);
// zmogus.labas();
// zmogus.ate();

const { vardas: sunsVardas, gimMetai } = suo;
console.log(sunsVardas);
console.log(gimMetai);
