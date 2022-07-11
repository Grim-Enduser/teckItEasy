//import data//
import getInventory from "/data/inventory.js";
import {
    arrayOfAmbiTv,
    arrayOfSoldOutTv,
    arrayOfTvNames,
    arrayOfTvPrices,
    emptyfieldbeforeclick,
    injectedArrayOfAmbiTv, injectedArrayOfTVsSortedByPrice, injectedSelectionOfAvailableTvs
} from "./functions/opdracht1.js";
import {totalSalesCalc, totalTvbought, toBeSoldTvsCalc} from "./functions/opdracht2.js";
import {createListOfTvNames} from "./functions/opdracht3.js";
import {
    createAvailableScreenSizes,
    createTvName,
    tvPrice,
    createInfoPerTv,
    createOptionsList,
    createInjectionListOfTvNames,
    createOptionsMap,
} from "./functions/opdracht4.js";


// opdrachten //

//1a//
console.log(arrayOfTvNames);
//1b//
console.log(arrayOfSoldOutTv);
//1c//
console.log(arrayOfAmbiTv);
//1d//
console.log(arrayOfTvPrices);

//2a//
console.log(totalSalesCalc(getInventory()));
//2b//
export const soldTvinput = document.getElementById("soldTvs");
soldTvinput.innerText = `totaal verkochte tv's ${totalSalesCalc(getInventory)}`
soldTvinput.style.color = "green";
//2c//
console.log(totalTvbought(getInventory()));
//2d//
export const totalTvStockInput = document.getElementById("totalTvsBought");
totalTvStockInput.innerText = `total ingekochte tv's ${totalTvbought(getInventory)}`
totalTvStockInput.style.color = "blue";
//2e//
// export const toBeSoldTvs = totalTvbought(inventory) - totalSalesCalc(inventory);
// return toBeSoldTvs;

export const toBeSoldTvsInput = document.getElementById(" ToBeSoldtv's");
toBeSoldTvsInput.innerText = `totaal nog te verkopen tv's ${toBeSoldTvsCalc(getInventory)}`
toBeSoldTvsInput.style.color = "red";



//3a//
createListOfTvNames(getInventory());


//4a//

console.log ( createTvName ( getInventory()[2] ) );

//4b//
console.log ( tvPrice ( getInventory()[5] ) );

//4c//
console.log (createAvailableScreenSizes( getInventory()[4] ) );

//4d//

createInfoPerTv(getInventory()[5]);

//4e//
console.log(createOptionsList( getInventory()[3] ) );
createInjectionListOfTvNames(getInventory());
console.log(createOptionsMap);

export const bonusOpdrachtButton = document.getElementById('bonus-opdracht-button');
bonusOpdrachtButton.addEventListener('click', () => {
    emptyfieldbeforeclick ()
    injectedArrayOfAmbiTv ()
    console.log('dit werkt dus gewoon')
});

export const bonusOpdrachtButtonAvailableTvs = document.getElementById('bonus-opdracht-button-available');
bonusOpdrachtButtonAvailableTvs.addEventListener('click', injectedSelectionOfAvailableTvs);

export const bonusOpdrachtButtonPrice = document.getElementById('bonus-opdracht-button-price');
bonusOpdrachtButtonPrice.addEventListener('click', () => {
    emptyfieldbeforeclick ()
    injectedArrayOfTVsSortedByPrice ()
    console.log('dit werkt dus ook gewoon')
});