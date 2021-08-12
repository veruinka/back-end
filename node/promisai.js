console.log("pradzia");
let p = new Promise((resolve, reject) => {
    console.log("pradedam vykdyt promisa");
    setTimeout(() => {
        if (Math.random() < 0.999) {
            console.log("patvirtinam");
            resolve("OK");
        } else {
            console.log("atmetam");
            reject("BAD");
        }
    }, 0);
    console.log("baigiam vykdyt promisa");
});

setTimeout(()=> {
    console.log("O sitas suveiks ne pats paskutinis");
    // console.log("O sitas suveiks pries promisus");
}, 0);

let pInner;
let p1 = p.then(
    value => {
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("----------");
        for (let i = 0; i < 50000; i++) {
            for (let j = 0; j < 1000; j++) {
            }
        }
        console.log("P resolved with " + value);
        // return "GOOD";
        pInner = new Promise((resolve, reject) => {
            console.log("inner promise start");
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    resolve("inner ok");
                } else {
                    reject("inner bad");
                }
            }, 0);
            console.log("inner promise finish");
        });
        return pInner;
    }
    // ,
    // err => {
    //     console.log("p", p);
    //     console.log("p1", p1);
    //     console.log("p2", p2);
    //     console.log("----------");
    //     console.log("P rejected with " + err);
    //     return undefined;
    // }
);

let p2 = p1.then(value => {
    console.log("pInner", pInner);
    console.log("p", p);
    console.log("p1", p1);
    console.log("p2", p2);
    console.log("----------");
    console.log("P1 resolved with value " + value);
    return "Very good";
});
let p3 = p2.catch(
    err => {
        console.log("pInner", pInner);
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("p3", p3);
        console.log("----------");
    }
);
let p4 = p3.finally(() => {
    console.log("finally");
    console.log("p", p);
    console.log("p1", p1);
    console.log("p2", p2);
    console.log("p3", p3);
    console.log("----------");
    return "finally";
});
let p5 = p4.then(
    value => {
        console.log("resolved P4");
        console.log(p4);
    },
    err => {
        console.log("rejected P4");
        console.log(p4);
    }
)

console.log("p", p);
console.log("p1", p1);
console.log("p2", p2);
console.log("p3", p3);
console.log("p4", p4);
console.log("----------");

console.log("pabaiga");