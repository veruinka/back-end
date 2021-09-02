/*
parasyti funkcija, kuri gautu skaiciu (svieka, teigiama)
ir garzina teksta kuris yra gautas skaiciaus dvejetaineje sistemoje

4564818 => "10001011010011101010010"
*/

let tekstas = "4564818";

let sk = 0;

for (let i = 0; i < tekstas.length; i++) {
    sk = sk * 10 + (tekstas.charCodeAt(i) - 48);
}

console.log(sk);
//////////////////

let skaitmenys = [];

while (sk > 0) {
    let skaitmuo = sk % 10;
    skaitmenys.unshift(skaitmuo + 48);
    sk = (sk - skaitmuo) / 10;
}

console.log(skaitmenys);





function toBinary(num) {
    num = parseInt(num);
    if (!isFinite(num)) {
        return "";
    }
    if (num === 0) {
        return "0";
    }
    num *= num < 0 ? -1 : 1;
    const digits = [];
    while (num > 0) {
        digits.unshift(num % 2);
        num = (num - (num % 2)) / 2;
    }
    return digits.join("");
}




function toHex(num) {
    num = parseInt(num);
    if (!isFinite(num)) {
        return "";
    }
    if (num === 0) {
        return "0";
    }
    num *= num < 0 ? -1 : 1;
    const digits = [];
    while (num > 0) {
        let digit = num % 16;
        num = (num - (digit)) / 16;
        if (digit <= 9) {
            digit += 48;
        } else {
            digit = digit - 9 + 64;
        }
        digits.unshift(String.fromCharCode(digit));
        // digits.unshift(digit);
    }
    return digits.join("");
    // return String.fromCodePoint(...digits);
}



function toDecimal(num) {
    num = parseInt(num);
    if (!isFinite(num)) {
        return "";
    }
    if (num === 0) {
        return "0";
    }
    num *= num < 0 ? -1 : 1;
    const digits = [];
    while (num > 0) {
        let digit = num % 10;
        num = (num - (digit)) / 10;
        digit += 48;
        digits.unshift(String.fromCharCode(digit));
        // digits.unshift(digit);
    }
    return digits.join("");
    // return String.fromCodePoint(...digits);
}