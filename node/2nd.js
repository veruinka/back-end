/*
atpausdinti daugybos lentele:
1
2
3
2
4
6
3
6
9
*/

var nuo = 1;
var iki = 3;

var i = nuo;
while (i <= iki) {
    var j = nuo;
    while (j <= iki) {
        console.log(i * j);
        j++;
    };
    i++;
};








const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (txt) => {
            resolve(txt);
        });
    });
}

function sveikasSkaicius(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (num) => {
            resolve(parseInt(num));
        });
    });
}

async function main() {

    /*
    Zmogus pasirenka A/P/Z/X
    A - akmuo
    P - popierius
    Z - zirkles
    X - pabaiga
    
    
    jei ivede kazka ne tokio - vel prasom, kad pasirinktu
    
    Kompiuteris pasirenka A/P/Z random
    
    Akmuo laimi pries zirkles
    Popierius laimi pries akmeni
    Zirkles laimi pries popieriu
    jei abu pasirinko ta pati - lygiosios
    
    reikia atspausdinti:
    tu laimejai
    lygiosios
    laimejo kompiuteris
    
    ir vel pasirinkimas zmogui
    */

    var zaidVyksta = true;
    while (zaidVyksta) {
        var zp = await tekstoIvedimas("Pasirink A/P/Z/X: ");

        if (zp == 'A' || zp == 'P' || zp == 'Z') {
            var r = Math.random();
            var cp;
            if (r < 0.333333333333333) {
                cp = 'A';
            } else if (r < 0.66666666666666) {
                cp = 'P';
            } else {
                cp = 'Z';
            };
            console.log('Tu: ', zp, 'Copm: ', cp);
            if (cp == zp) {
                console.log('Lygiosios');
            } else if (
                (zp == 'A' && cp == 'Z') ||
                (zp == 'P' && cp == 'A') ||
                (zp == 'Z' && cp == 'P')
            ) {
                console.log('Tu laimejai');
            } else {
                console.log('Laimejo kompiuteris');
            }
        }
        if (zp == 'X') {
            zaidVyksta = false;
        };
    };


    /*
    programa paklausia kiek kartu zaisim (skaicius)

    zaidzia comp1 vs comp2

    po visu zaidimu programa atspausdina statistika:
    comp1 laimejo XXXX
    lygiosios XXXX
    comp2 laimejo XXXX

    (per abu kompiuterius)
    Akmuo iskrito XXXX
    popierius iskrito XXXX
    zirkles iskrito XXXX
    */

    var cp1Win = 0;
    var cp2Win = 0;
    var draw = 0;
    var rockCount = 0;
    var paperCount = 0;
    var scissorsCount = 0;
    var kiek = await sveikasSkaicius("Kiek kartu zaist: ");
    if (kiek > 0) {
        while (kiek > 0) {
            var r = Math.random();
            var cp1;
            if (r < 0.3333333333333) {
                cp1 = "A";
                rockCount = rockCount + 1;
            } else if (r < 0.666666666666) {
                cp1 = "P";
                paperCount = paperCount + 1;
            } else {
                cp1 = "Z";
                scissorsCount = scissorsCount + 1;
            }
            r = Math.random();
            var cp2;
            if (r < 0.3333333333333) {
                cp2 = "A";
                rockCount = rockCount + 1;
            } else if (r < 0.666666666666) {
                cp2 = "P";
                paperCount = paperCount + 1;
            } else {
                cp2 = "Z";
                scissorsCount = scissorsCount + 1;
            }
            if (cp1 == cp2) {
                draw = draw + 1;
            } else if (
                (cp1 == "A" && cp2 == "Z") ||
                (cp1 == "P" && cp2 == "A") ||
                (cp1 == "Z" && cp2 == "P")
            ) {
                cp1Win = cp1Win + 1;
            } else {
                cp2Win = cp2Win + 1;
            }

            kiek = kiek - 1;
        }
        console.log("Draw:", draw);
        console.log("CP1 win:", cp1Win);
        console.log("CP2 win:", cp2Win);
        console.log();
        console.log("Akmuo:", rockCount);
        console.log("Popierius:", paperCount);
        console.log("Zirkles:", scissorsCount);
    }

    rl.close();
}

main();