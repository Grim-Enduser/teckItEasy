//import data//
import inventory from "/data/inventory.js";

//1a//

export const arrayOfTvNames = inventory.map((item) => {
    return item.name;
})

//1b//

export const arrayOfSoldOutTv = inventory.map((item) => {

})

//     * **Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
// zijn. Log de uitkomst in de console.
// * **Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
// beschikken. Log de uitkomst in de console.
// * **Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
// console.
