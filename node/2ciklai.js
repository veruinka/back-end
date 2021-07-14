var i = 0;
var suma = 0;

while (i <= 100){
    if(i%2 == 0){
    //jeigu skaicius dalijasi is dvieju be liekanos ( == 0)
        suma = suma + i;
        //uzsisaugojam rezultata i nauja kintamaji
    }
i = i + 1;
};

console.log(suma);