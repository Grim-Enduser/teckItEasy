// #### Opdracht 1 - Array Methoden
//
// * **Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
// console.
// * **Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
// zijn. Log de uitkomst in de console.
// * **Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
// beschikken. Log de uitkomst in de console.
// * **Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
// console.


//import data//
import inventory from "/data/inventory.js";
import {createAvailableScreenSizes, createTvName, tvPrice} from "./opdracht4.js";

//1a//

export const arrayOfTvNames = inventory.map((item) => {
    return item.name;
});

//1b//

export const arrayOfSoldOutTv = inventory.filter((item) => {
    if (item.sold === item.originalStock){
        return true;
    }
});

// export const arrayOfSoldOutTv = inventory.map((item) => {
//     if (item.sold === item.originalStock){
//         return item;
//     }
// });

//1c//
//bonusvariatie//

export const emptyfieldbeforeclick = () => {

    const emptybeforeclick = document.getElementById('bonusveld');

    emptybeforeclick.innerHTML ='';

    return emptybeforeclick;

};

export const injectedArrayOfAmbiTv = () => {

        const listOfInjectedAmbi = document.getElementById('bonusveld');
        //dit was eerder filter omdat ik geen hele array wilden console.loggen//
        inventory.map((item) => {

        if (item.options.ambiLight === true){

            listOfInjectedAmbi.innerHTML +=`
            <p><strong>${createTvName(item)}</strong></p>
            <p><strong>${tvPrice(item)}</strong></p>
            <p><strong>${createAvailableScreenSizes(item)}</strong></p>
            `

        } return listOfInjectedAmbi;
    });
};


export const arrayOfAmbiTv = inventory.filter((item) => {
    if (item.options.ambiLight === true){
        return true;
    }
});



//1d//

export const arrayOfTvPrices = inventory.sort((a, b) => a.price - b.price);



