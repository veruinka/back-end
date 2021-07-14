const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sveikasSkaicius(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (num) => {
            resolve(parseInt(num));
        });
    });
}

async function main() {
    var sk1 = await sveikasSkaicius("Ivesk 1-a trikampio krastine");
    var sk2 = await sveikasSkaicius("Ivesk 2-a trikampio krastine");
    var sk3 = await sveikasSkaicius("Ivesk 3-a trikampio krastine");

    if((sk1 + sk2) > sk3 && (sk2 + sk3) > sk1 && (sk1 + sk3) > sk2){
        var per = sk1 + sk2 + sk3;
        console.log('Perimetras:', per);
        var pusPer = per/2;
        var plot = Math.sqrt((pusPer) * (pusPer - sk1) * (pusPer - sk2) * (pusPer - sk3));
        console.log('Plotis:', plot);
    } else{
        console.log('NE TRIKAMPIS');
    };

    // ivesti 3 trikampio krastines
    // patikrinti ar sustidaro trikampis
    // jei nesusidaro - atspausdinti "ne trikampis" ir viskas
    // jei susidaro:
    // atspausdinti trikampio perimetra
    // atspausdinti trikampio plota (Herono formule)
    // https://lt.wikibooks.org/wiki/Herono_formul%C4%97
    rl.close();
}

main();