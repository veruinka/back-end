"use strict";

/*

kintamasis - atminties vieta, kur saugoma VIENA reiksme

kintamuju tipai:
undefined
string : ''  arba "" arba `sringo pradzia ${sk1 + sk2} strgingo pabaiga`
number
boolean
object
function

kintamuju deklaravimas:
var - hoisting, gali kartotis deklaracijos, bet atminty kintamasis bus tik vienas
let - pradeda savo gyvenima nuo deklaravimo momento,
    negalima tureti keliu kintamuju tuo paciu vardu viename scope
const - tas pats, kad let, bet negalima pakeisti reiksmes

kintamieji deklaruoti su let ir const baigia savo gyvenima,
    kai pasibaigia scope, kuriame jie buvo deklaruoti


JS kintamuju paieskos mezhanizmas:
pradzioj ieskom kintamojo savo scope
jei neradom, ieskom isoriniam ir t.t.
*/
