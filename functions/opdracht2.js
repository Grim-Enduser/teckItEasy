//import data//
import getInventory from "/data/inventory.js";

// #### Opdracht 2 - Elementen in de DOM plaatsen

// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
// een oude vertrouwde for-loop voor!
//

// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.



export const totalSalesCalc = () => {

    const inventory = getInventory();

    let totalSales = null;

    for (let i = 0; i < inventory.length; i++) {
        totalSales += inventory[i].sold;
    }
    return totalSales;
}

// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
// See main//


// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.

export const totalTvbought = () => {

    const inventory = getInventory();

    let totalBought = null;

    for (let i= 0; i < inventory.length; i ++) {
        totalBought += inventory[i].originalStock;
    }return totalBought;


};

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
//See main//

// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

export const toBeSoldTvsCalc = () => totalTvbought(getInventory()) - totalSalesCalc(getInventory());



