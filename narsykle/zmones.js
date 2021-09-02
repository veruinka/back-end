const readline = require("readline");
const fs = require("fs/promises");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputText(msg) {
    return new Promise((resolve) => {
        rl.question(msg, (answer) => {
            resolve(answer);
        });
    });
}
function inputNumber(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (answer) => {
            const num = parseFloat(answer);
            if (!isNaN(num) && Number.isFinite(num)) {
                resolve(num);
            } else {
                reject(new Error(`${answer} is not a number`));
            }
        });
    });
}


let zmones = [
    {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        alga: 123.48
    },
    {
        vardas: "Petras",
        pavarde: "Petraitis",
        alga: 123.48
    },
    {
        vardas: "Antanas",
        pavarde: "Antanaitis",
        alga: 123.48
    }
];

let menu = [
    "1. atspausdinti visus zmones",
    "2. prideti nauja",
    "3. istrinti zmogu",
    '4. turtuoliu sarasas',
    "0. pabaigti"
];

console.log(menu);

async function main() {
    let menuInput = await inputNumber("Pasirinkite menu punkta:");
    let sarasas = ``;
    let visiZmones = await fs.readFile('zmones.json', {
        encoding: 'utf-8'
    });
    let visiZmonesObj;

    try {
        console.log(menuInput);
        visiZmones;

        if (menuInput === 1) {
            try {
                visiZmonesObj = JSON.parse(visiZmones);

                for (let i = 0; i < visiZmonesObj.length; i++) {
                    sarasas += i +
                        ' ' + visiZmonesObj[i].vardas +
                        ' ' + visiZmonesObj[i].pavarde +
                        ' ' + visiZmonesObj[i].alga + '\n\r';
                }

                console.log(sarasas);

                main();
            } catch (err) {
                console.log('Klaida skaitant is failo');
                console.log(err);

                await fs.writeFile("zmones.json", JSON.stringify(zmones, null, 2), {
                    encoding: "utf-8"
                });

                main();
            }
        } else if (menuInput === 2) {
            let naujasZmogus = {};

            try {
                let vardas = await inputText("Ivesk varda: ");
                naujasZmogus.vardas = vardas;
            } catch (err) {
                console.log('blogai parasyta' + err);
            }

            try {
                let pavarde = await inputText("Ivesk pavarde: ");
                naujasZmogus.pavarde = pavarde;
            } catch (err) {
                console.log('blogai parasyta' + err);
            }

            try {
                let alga = await inputNumber("Ivesk alga: ");
                naujasZmogus.alga = alga;
            } catch (err) {
                console.log('blogai parasyta' + err);
                main();
            }

            zmones.push(naujasZmogus);

            console.log(sarasas);

            try {
                await fs.writeFile("zmones.json", JSON.stringify(zmones, null, 2), {
                    encoding: "utf-8"
                });
            } catch (err) {
                console.log("Failed to write to file", err);
            }
            main();
        } else if (menuInput === 3) {
            try {
                let trinamZmogu = await inputNumber('Trinam zmogu Nr.:');
                zmones.splice(trinamZmogu, 1);
            } catch (err) {
                console.log('Tokio zmogaus nera', err);
            }

            try {
                await fs.writeFile("zmones.json", JSON.stringify(zmones, null, 2), {
                    encoding: "utf-8"
                });
            } catch (err) {
                console.log("Failed to write to file", err);
            }
            main();
        } else if (menuInput === 4) {
            try {
                let turtuolioAlga = await inputNumber('Kokia turtuolio alga?');
                visiZmonesObj = JSON.parse(visiZmones);

                for (let i = 0; i < visiZmonesObj.length; i++) {
                    if (visiZmonesObj[i].alga >= turtuolioAlga) {
                        sarasas += i +
                            ' ' + visiZmonesObj[i].vardas +
                            ' ' + visiZmonesObj[i].pavarde +
                            ' ' + visiZmonesObj[i].alga + '\n\r';
                    }
                }
                console.log(`\nTurtuoliu sarasas:\n`);
                console.log(sarasas);
            } catch (err) {
                console.log('Ne taip uzrasei', err);
            }

            main();
        } else if (menuInput === 0) {
            rl.close();
        } else if (menuInput !== 0 ||
        menuInput !== 1 ||
        menuInput !== 2 ||
        menuInput !== 3 ||
        menuInput !== 4 ||
        typeof menuInput != 'number') {
            console.log(menu);
            throw err;
        }
    } catch(err) {
        console.log('Netinkamas menu punktas', err);
        main();
    }
}
main();

/*
zmoniu sarasas

vienas zmogus atrodo taip:
{
    vardas: "Jonas"
    pavarde: "Jonaitis",
    alga: 123.48
}

parodom meniu:
1. atspausdinti visus zmones
2. prideti nauja
3. istrinti zmogu
0. pabaigti

duomenys saugomi faile zmones.json
jei failo nera - programa sukuria faila pirmo pridejimo metu

1. perskaitom is zmones.json ir parodom sarasa (su numeriais - eiles numeris masyve)
jei failo nera - nieko nespausdinam
2. papraso ivesti varda, pavarde, alga
prideda nauja zmogu i sarasa (prie failo, jei nera sukuria)
3. papraso ivesti numeri (is saraso) zmogaus, kuri reikia istrinti
istrina is saraso ir perraso faila
0. baigia darba

pasirinkus neegzistuojanti meniu punkta (jei ivede ne 0, 1, 2, 3, tai vel spausdinti meniu)

*)
4. turtuoliu sarsas
papraso ivesti skaiciu
atspausdina visus zmones, kuriu alga didesne uz ivesta skaiciu

*/
