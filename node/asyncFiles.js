const fs = require("fs/promises");

async function main() {
    let i;
    const fileNames = ["a.txt", "b.txt", "c.txt", "d.txt"];
    try {
        let allData = "";
        for (i = 0; i < fileNames.length; i++) {
            allData += await fs.readFile(fileNames[i], {
                encoding: "utf-8"
            });
        }
        console.log(allData);
    } catch (err) {
        console.log("klaida skaitant is failo " + fileNames[i]);
        console.log(err);
    }
}

main();