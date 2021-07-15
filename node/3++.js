var sk;
var ksk = 1;
sk = ksk++ - ++ksk + ksk-- - --ksk;
//     1(2)   -     2    +  1   -     0
//0     1

console.log(sk);
console.log(ksk);
