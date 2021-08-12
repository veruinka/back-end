const fs = require("fs");

console.log("pradzia");

let duomenys = ":";
fs.readFile("a.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    console.log("perskaiciau: " + data);
    duomenys += data;
});
fs.readFile("b.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    console.log("perskaiciau: " + data);
    duomenys += data;
});

console.log(duomenys);
console.log("pabaiga");

/*
reikia kad i ekrana atspausdintu:
failo a.txt turini + failo b.txt turini

*/