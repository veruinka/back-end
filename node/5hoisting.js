"use strict";
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