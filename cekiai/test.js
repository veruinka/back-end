class Preke {
    #islaiduTipai;
    #id;
    #pavadinimas;
    #kaina;
    #tipasId;

    constructor(islaiduTipai, preke) {
        if (!Array.isArray(islaiduTipai)) {
            throw new TypeError("islaiduTipai must be an array");
        }
        this.#islaiduTipai = islaiduTipai;
        if (typeof preke !== "object") {
            throw new TypeError("preke must be an object");
        }
        this.id = preke.id;
        this.pavadinimas = preke.pavadinimas;
        this.kaina = preke.kaina;
        this.tipasId = preke.tipasId;
    }

    get id() {
        return this.#id;
    }
    set id(value) {
        if (typeof value !== "number" && typeof value !== "undefined") {
            throw new TypeError("id must be a number");
        }
        if (value && !isFinite(value)) {
            throw new TypeError("id must be a finite number");
        }
        this.#id = value;
    }

    get pavadinimas() {
        return this.#pavadinimas;
    }
    set pavadinimas(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new TypeError("pavadinimas must be non-empty string");
        }
        this.#pavadinimas = value;
    }

    get kaina() {
        return this.#kaina;
    }
    set kaina(value) {
        if (typeof value !== "number" && typeof value !== "undefined") {
            throw new TypeError("kaina must be a number");
        }
        if (value && !isFinite(value)) {
            throw new TypeError("kaina must be a finite number");
        }
        this.#kaina = value;
    }

    get tipasId() {
        return this.#tipasId;
    }
    set tipasId(value) {
        const islaiduTipas = this.#islaiduTipai.find(it => it.id === value);
        if (!islaiduTipas) {
            throw new TypeError("tipasId must point to valid object");
        }
        this.#tipasId = value;
    }

    get tipas() {
        const islaiduTipas = this.#islaiduTipai.find(it => it.id === this.#tipasId);
        return islaiduTipas.pavadinimas;
    }

    toJSON() {
        return {
            id: this.#id,
            pavadinimas: this.#pavadinimas,
            kaina: this.#kaina,
            tipasId: this.#tipasId
        };
    }
}

const it = [
  {
    "id": 1,
    "pavadinimas": "Maisto prekės",
  },
  {
    "id": 2,
    "pavadinimas": "Gerimai",
  },
  {
    "id": 11,
    "pavadinimas": "dar vienas",
  },
];

const preke = new Preke(it, {
    id: 15,
    pavadinimas: "Duona",
    kaina: 2.32,
    tipasId: 1
});

console.log(preke);
console.log(preke.id);
console.log(preke.pavadinimas);
console.log(preke.kaina);
console.log(preke.tipasId);
console.log(preke.tipas);
console.log(JSON.stringify(preke));