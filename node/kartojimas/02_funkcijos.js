/*
funkcija yra specialus objektas

aprasoma su 'function';
    po to, jei norim, rasom funkcijos varda
    po to skliausteliuose isvardinam argumentus
    garbanotuose skliausteliuose funkcijos kunas

atskirai aprasytos funkcijos yra hoistinamos

function pavadinimas(param1, param2) {
    let rez = param1 + param2;
    console.log(rez);
    //return rez;
}

funkcija galima iskviesti:
pavadinimas(2, 3, 4, 5);

kai kvieciam funkcija:
sustabdomas kvieciantysis scope
sukuriamas naujas scope (funkcijos vykdymui)
is karto scope yra kintamieji:
this - kontekstas
arguments - specialus objektas (kaip masyvas)
(jei yra parametrai): param1, param2
hoisting'as
vykdomas funkcijos kunas

visos funkcijos grazina reiksme
tai kas nurodyta po 'return'
jei nera 'return' - funkcija grazina undefined

kai funkcija baigia darba(grazina reiksme), jos scope baigiasi
ir programa grizta i iskvietusi scope

*/

console.log(suma(1, 2));

function suma(a, b) {
    return a + b;
}
