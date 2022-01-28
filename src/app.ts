// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: "Kate",
        sex: "female",
        age: 25,
        health: 100,
    },
    {
        id: 2,
        name: "Tom",
        sex: "male",
        age: 30,
        health: 110,
    },
    {
        id: 3,
        name: "Jhon",
        sex: "male",
        age: 72,
        health: 40,
    }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {
        id: 4,
        name: "Transformer",
        wings: 6,
        wheels: 4,
        clan: "insignia"
    },
    {
        id: 5,
        name: "Transporter",
        wings: 0,
        wheels: 12,
        clan: "autobot"
    },
    {
        id: 6,
        name: "Transmitter",
        wings: 6,
        wheels: 6,
        clan: "maximal"
    }
];
