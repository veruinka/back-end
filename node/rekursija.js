// function faktorialas(sk) {
//     return sk * faktorialas(sk - 1);
// }

// console.log(faktorialas(3)); //amzina rekursine funkcija





// function faktorialas(sk) {
//     if (sk === 0) {
//         return 1;
//     }
//     return sk * faktorialas(sk - 1);
// }

// console.log(faktorialas(3)); //rekursine funkcija





function faktorialas(sk) {
    if (typeof sk !== 'number') {
        throw new Error('Must be number'); //prevencija nuo debilu
    };
    if (sk < 0) {
        throw new Error('Must be 0 or positive'); //prevencija nuo nuamzinimo
    };
    if (sk === 0) {
        return 1;
    };
    return sk * faktorialas(sk - 1);
}

console.log(faktorialas(undefined)); 
