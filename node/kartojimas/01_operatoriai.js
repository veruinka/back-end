/*
=
+
-
*
**
/
%

+=
-=
*=
/=
%=
**=

!=
!==
==
===
>
>=
<
<=

&
&&
|
||
^
!

++
--

typeof kintamasis - grazina string'a, kuriame aprasytas kintamojo tipas pvz.: "object"

kintamasis instanceof Klase - grazina boolean, ar kintamasis rodo i objekta, kuris yra Klases atstovas

delete objektas.savybe - is objekto istrins savybe

(salyga) ? reiksme1 : reiksme2 - jei salyga yra true, grazins reiksme1, priesingu atveju reiksme2

operatoriu atlikimo tvarka:
pagal precedence lentele: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
kuo didesnis precedence - tuo pirmesnis
jei operatoriu precedence vienodas, ziurim i Associativity

*/
/*
a: 258
b: false
*/

let a = 2 + 2 ** 2 ** 3;

let b;

// b &&= (a > 0);

b = b && (a > 0);
//        258 > 0
//        true
// undefined && true
// false && true
//    false