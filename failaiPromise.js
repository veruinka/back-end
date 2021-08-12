const fs = require("fs/promises");

let allData = "";
const fileNames = ["a.txt", "b.txt", "c1.txt", "d.txt"];
let currentFile = 0;

let resolver = data => {
    console.log("perskaiciau is failo " + fileNames[currentFile]);
    allData += data;
    currentFile++;
    if (currentFile < fileNames.length) {
        return fs.readFile(fileNames[currentFile], {
            encoding: "utf-8"
        });
    }
};

let p = fs.readFile(fileNames[currentFile], {
    encoding: "utf-8"
});
for(let i = currentFile; i < fileNames.length; i++) {
    p = p.then(resolver);
}

// .then(resolver)
// .then(resolver)
// .then(resolver)
p.catch(
    err => {
        console.log("klaida skaitant is failo " + fileNames[currentFile]);
        console.log(err);
    }
)
.finally(
    () => {
        console.log(allData);
    }
);


/*
reikia kad i ekrana atspausdintu:
failo a.txt turini + failo b.txt + failo c.txt turini

*/