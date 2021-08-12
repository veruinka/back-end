// function faktorialas (sk) {
//     if (sk < 0) {
//         return -1;
//     }
//     if (sk === 0) {
//         return 1;
//     }
//     return sk * faktorialas(sk - 1);
// }

// console.log(faktorialas(-7));


// function skaiciuSuma(nuo, iki) {
//     if (typeof nuo !== "number" || typeof iki !== "number") {
//         throw "klaida";
//     }
//     let suma = 0;
//     for(let i = nuo; i <= iki; i++) {
//         suma += i;
//     }
//     return suma;
// }
// console.log(skaiciuSuma(-1, 0));
// console.log(skaiciuSuma({vardas: "Jonas"}, "labas") + 7);

function klaiduGeneratorius() {
    let k = new Error("nu ir kas kad sukurei klaidos objekta...");
    let sk = Math.random();
    if (sk < 0.25) {
        throw sk;
    } else if (sk < 0.75) {
        throw new Error("skaicius tarp 0.25 ir 0.75: " + sk);
    }
    return sk;
}

function tustiVartai() {
    console.log("tusti vartai prasideda");
    klaiduGeneratorius();
    console.log("tusti vartai pasibaigia");
}

function svetimasSavoKomandoj() {
    console.log("svetimas savo komandoj prasideda");
    try {
        tustiVartai();
    } catch (err) {
        console.log("pagavau... ir metu toliau");
        throw err;
    }
    console.log("svetimas savo komandoj pasibaigia");
}

function vartaiSuNiuansais() {
    console.log("tusti vartai su niuansais prasideda");
    try {
        svetimasSavoKomandoj();
        console.log("tusti vartai su niuansais pasibaigia");
    }
    finally {
        console.log("Niuansai....");
    }
}

function piktasSvetimasSavoKomandoj() {
    console.log("piktas svetimas savo komandoj prasideda");
    try {
        vartaiSuNiuansais();
    } catch (err) {
        console.log("pagavau... ir metu kita klaida");
        let e = new Error("o cia kita klaida");
        e.cause = err;
        throw e;
    }
    console.log("piktas svetimas savo komandoj pasibaigia");
}

try {
    console.log("try pradzia");
    console.log(piktasSvetimasSavoKomandoj());
    console.log("try pabaiga");
}
catch (err) {
    console.log("ivyko klaida: ", err);
}
finally {
    console.log("Sitas visada suveiks!!!");
}

console.log("programos pabaiga");
