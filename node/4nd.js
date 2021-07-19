var lines = 15;
var columns = 30;

function tusciasLaukas() {
    // sukurem nauja masyva su eiluciu kiekiu lines
    // ir stulpeliu kiekiu colums
    var field = new Array(lines);
    for (var y = 0; y < field.length; y++) {
        field[y] = new Array(columns);
    }
    return field;
}

var field = tusciasLaukas();

// uzpildom lauka atsitiktiniu budu
for (var y = 0; y < field.length; y++) {
    for (var x = 0; x < field[y].length; x++) {
        if (Math.random() < 0.22) {
            field[y][x] = "X";
        } else {
            field[y][x] = ".";
        }
    }
}


for (var y = 0; y < field.length; y++) {
    var line = "";
    for (var x = 0; x < field[y].length; x++) {
        line += field[y][x];
    }
    console.log(line);
}
console.log("==================================");

for (var i = 1; i <= 50; i++) {
    // ND
}

/*
1. atspausdinti 50 iteraciju

2. nutraukti spausdinima anksciau, jei susiformavo identiska iteracija

3. nutraukti spausdinima anksciau, jei susiformavo itracija, kuri jau buvo istorijoje
*/









var m = [1, 2, 3, 4, 5];

var rez1 = new Array(m.length);
for (let i = 0; i < rez1.length; i++) {
    rez1[i] = new Array(m.length);
}

for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
        rez1[i][j] = m[(i + j) % m.length];
    }
}
console.log(rez1);

/*
1, 2, 3, 4, 5
2, 3, 4, 5, 1
3, 4, 5, 1, 2
4, 5, 1, 2, 3
5, 1, 2, 3, 4
*/


var rez2 = newArray(m.length);
for (let i = 0; i < rez2.length; i++) {
    rez2[i] = newArray(m.length);
}

for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
        rez2[i][(i + j) % m.length] = m[j];
    }
}

console.log(rez2);
/*
1, 2, 3, 4, 5
5, 1, 2, 3, 4
4, 5, 1, 2, 3
3, 4, 5, 1, 2
2, 3, 4, 5, 1
*/







var m = [54, 5, 8, 1, -1, -185, 45, 652, 1, 0, 652, -7];

for (let i = 0; i < m.length - 1; i++) {
    for (let j = i + 1; j < m.length; j++) {
        if (m[i] > m[j]) {
            var tmp = m[i];
            m[i] = m[j];
            m[j] = tmp;
        }
    }
}
console.log(m); // didejimo tvarka

for (let i = 0; i < m.length - 1; i++) {
    for (let j = i + 1; j < m.length; j++) {
        if (m[i] < m[j]) {
            var tmp = m[i];
            m[i] = m[j];
            m[j] = tmp;
        }
    }
}
console.log(m); // mazejimo tvarka