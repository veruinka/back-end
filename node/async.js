function paprasta() {
    return 1;
}

async function asinchronine2() {
    return 2;
}
async function asinchronine3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                return resolve(3);
            }
            reject(new Error());
        }, 3000);
    });
}

async function main() {
    console.log("pradzia");
    try {
        let sk = await asinchronine2() + await asinchronine3();
        console.log(sk);
        console.log("pabaiga");
    } catch (err) {
        console.log("Klaida", err);
    } finally {
        console.log("visada");
    }
}
main();

  // console.log("pradzia");
  // let sk;
  // let op1;
  // asinchronine2()
  //   .then((value) => {
  //     op1 = value;
  //     return asinchronine3();
  //   })
  //   .then((value) => {
  //     sk = op1 + value;
  //     console.log(sk);
  //     console.log("pabaiga");
  //   })
  //   .catch((err) => {
  //     console.log("Klaida", err);
  //   })
  //   .finally(() => {
  //     console.log("visada");
  //   });

  // console.log(paprasta());
  // console.log(asinchronine());

  // asinchronine().then( sk => {
  //     console.log(sk);
  // });
