//import data//
import getInventory from "/data/inventory.js";



// #### Opdracht 4 -Functies
//
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
//     * **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
//
//



export const createTvName = ( tv ) => {

    return `Brand: ${tv.brand} Type: ${tv.type} Name: ${tv.name}`

};


// * **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.

export const tvPrice = ( tv ) => {
    return `€ ${tv.price},-`;
};


// * **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

export const createAvailableScreenSizes = ( tv ) => {

    let output ='';

    tv.availableSizes.map((sizes, i) => {

        let sizeInCm = Math.round(sizes * 2.54)

        output += `${sizes} Inches (${sizeInCm} cm) `


        if (i < tv.availableSizes.length -1) {
            output = `${output} | `
        }

    })

    return output;

}



//
// * **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

const infoPerTvInjectie = document.getElementById('tv-informatie-per-tv')

export const createInfoPerTv = (tv) => {

    infoPerTvInjectie.innerHTML = `
    <p><stong>${createTvName(tv)}</stong></p>
    <p><em> ${tvPrice(tv)}</em></p>
    <p>${createAvailableScreenSizes(tv)}</p>
    `

};




//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
// * **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//

export const createInjectionListOfTvNames = () => {

    const listeOfInjectedTvs = document.getElementById('all-Tvs-Info');

    return getInventory().map((tv) => {

        listeOfInjectedTvs.innerHTML += `
            
        <p><stong>${createTvName(tv)}</stong></p>
        <p><em> ${tvPrice(tv)}</em></p>
        <p>${createAvailableScreenSizes(tv)}</p>
        <p>${createOptionsList(tv)}</p>
        `
    });
};

export const createOptionsList = ( tv ) => {

    return `Speech: ${tv.options.speech} Wifi: ${tv.options.wifi} ambilight: ${tv.options.ambiLight}`

};

export const createOptionsMap = getInventory().map((item) => {

    return `Speech: ${item.options.speech} Wifi: ${item.options.wifi} ambilight: ${item.options.ambiLight}`

});

console.log(
    []
        .concat(...getInventory().map((tv) => tv.availableSizes))
        .reduce((sum, current) => sum + current, 0)
)

export const newArrayOfAllAvailableSizes = () => {

    let array = [].concat(...getInventory().map((tv) => tv.availableSizes))
        .reduce((sum, current) => sum + current, 0)
    return array;
};

// #### Bonusopdracht
//
// 1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
// die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
// dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op
// de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!
//     2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
// jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

