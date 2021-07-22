let jonas = {
    vardas: "Jonas",
    pavarde: "Jonaitis"
};

jonas.adresai = [
    {
        addr: "Gedimino 9",
        zmogus: jonas
    },
    {
        addr: "Sauletekio 117",
        zmogus: jonas
    }
];


let petras = {
    vardas: "Petras",
    pavarde: "Petraitis"
}

petras.adresai = [
    {
        addr: "Savanoriu 1",
        zmogus: petras
    }
];

console.log(petras);
let adresas = petras.adresai[0];

 
console.log(adresas.zmogus.vardas + " gyvena " + adresas.addr);
adresas.zmogus.vardas = "Antanas";
console.log(petras.vardas, petras.pavarde);