var sk;
var ksk = 1;
sk = ksk++ - ++ksk + ksk-- - --ksk;
//     1(2)   -     2    +  1   -     0
//0     1

console.log(sk);
console.log(ksk);







var m = [2, 5, 3, 74, 45, 3432];
/*
atspausdinti masyvo elementu suma ir vidurki
*/

var i = 0;
var suma = 0;

while (i < m.length){
    suma += m[i++];
}

console.log(suma);
console.log(suma /m.length);

