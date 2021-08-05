"use strict";

// ieskom kintamojo savo scope
{
    let a = 10;
    console.log(a);
}

// ieskom kintamojo isoriniame scope
{
    let b = 15;
    {
        let a = 10;
        console.log(a + b);
    }
}

// ieskom kintamojo leksiskai teviniame scope
{
    let c = 10;
    function test() {
        let b = 15;
        {
            let a = 10;
            console.log(a + b + c);
        }
    }
    test();
}

// ieskom kintamojo tarp 'global' (nasyklese 'window') savybiu
global.d = 12; // savbe globaliam objekte
{
    let c = 10; // leksiskai tevinis scope
    function test() {
        let b = 15; // isorinis scope
        {
            let a = 10; // savo scope
            console.log(a + b + c + d);
        }
    }
    test();
}








// console.log(j);
// {
//     let i = 1;
//     var j = 10;
//     console.log(i, j);
// }
// i = 7;
// console.log(i, j);



console.log(j);
{
    let i = 1;
    var j = 10;
    {
        let i = 5;
        j += 8;
        console.log(i, j);
    }
    console.log(i, j);
}

console.log("pabaiga");




let i = 1;
while (i < 5) {
    let j = 5;
    console.log(i * j);
    i++;
}




let sk = 3;
for (let i = 1; i < 3; i++)
    console.log(i * sk);
console.log(i);


for (let i = 1; i < 3; i++) {
    let k = 4;
    console.log(i * sk + k);
}


for (let i = 1; i < 3; i++) {
    let k = 4;
    let i = 8;
    console.log(i * sk + k);
}