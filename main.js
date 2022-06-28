//import data//
import inventory from "/data/inventory.js";
import {arrayOfAmbiTv, arrayOfSoldOutTv, arrayOfTvNames, arrayOfTvPrices} from "./functions/opdracht1.js";
import {totalSalesCalc, totalTvbought, toBeSoldTvsCalc} from "./functions/opdracht2.js";



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
console.log(totalSalesCalc(inventory));
//2b//
export const soldTvinput = document.getElementById("soldTvs");
soldTvinput.innerText = `totaal verkochte tv's ${totalSalesCalc(inventory)}`
soldTvinput.style.color = "green";
//2c//
console.log(totalTvbought(inventory));
//2d//
export const totalTvStockInput = document.getElementById("totalTvsBought");
totalTvStockInput.innerText = `total ingekochte tv's ${totalTvbought(inventory)}`
totalTvStockInput.style.color = "blue";
//2e//
// export const toBeSoldTvs = totalTvbought(inventory) - totalSalesCalc(inventory);
// return toBeSoldTvs;

export const toBeSoldTvsInput = document.getElementById(" ToBeSoldtv's");
toBeSoldTvsInput.innerText = `totaal nog te verkopen tv's ${toBeSoldTvsCalc(inventory)}`
toBeSoldTvsInput.style.color = "red";
