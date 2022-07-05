//import data//
import inventory from "/data/inventory.js";

// #### Opdracht 3 - Array methoden en functies
//
// * **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.

export const createListOfTvNames = (tvs) => {

    const listeOfTvNames = document.getElementById('tv-object-list');


    return inventory.map((tv) => {

        listeOfTvNames.innerHTML += `
        <br>
        <ul>

            <li>${tv.type}</li>
            <li>${tv.name}</li>
            <li> Brand </li>
            <li> Price </li>
            <li>Available sizes</li>
                <ul>
                    <li>${tv.availableSizes}</li>
                </ul>
            <li>refreshRate</li>
            <li>screenType</li>
            <li>screenQuality</li>
            <li>smartTv</li>
            <li>options</li>
                <ul>
                    <li>Wifi: ${tv.options.wifi}</li>
                    <li>speech: ${tv.options.speech}</li>
                    <li>HDR</li>
                    <li>Bluetooth</li>
                    <li>Ambilight</li>
                </ul>
            <li>Original Stock</li>
            <li>Sold</li>

        </ul>
        `

    });


};

// export const loopOpTelTest = () => {
//
//     opGeteldeArray =[];
//
//     for (let i = 0 ; i < inventory.length; i++) {
//
//         if (inventory.isArray(items[i])){
//
//             opGeteldeArray.push(items[i]);
//         }
//     }
//
//     return opGeteldeArray;
//
// }

// * **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// -declaratie niet aan te roepen!