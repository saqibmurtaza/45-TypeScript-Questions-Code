import { clearScreenDown } from "readline";

// favourity cities to visit
let favouriteCities = ['Toronto','Newyork','London','Scotland','Netherland'];
console.log(`----------------------------------------------------------------------------`);
console.log(`Original Array : [${favouriteCities}]`);
let copyOfFavouriteCities = favouriteCities.slice(0,5)
console.log(`----------------------------------------------------------------------------`);
console.log(`List in Alaphabatical Order [${copyOfFavouriteCities.sort()}]`);
console.log(`------------------------------------------------------------------`);
console.log(`Reverse of Alphabatical order List : [${copyOfFavouriteCities.reverse()}]`)
console.log(`---------------------------------------------------------------------------`);
console.log(`Confirmation_Print of Original Array : [${favouriteCities}]`);
console.log(`---------------------------------------------------------------------------`);
console.log(`Reverse Order of Original Array : [${favouriteCities.reverse()}]`);
console.log(`---------------------------------------------------------------------------`);
console.log(`Back to Original Array : [${favouriteCities.reverse()}]\n`);
console.log(`---------------------------------------------------------------------------`);
console.log(`Original Array in Alphabatical order : [${favouriteCities.sort()}]`);
console.log(`Original Array in Reverse order : ${favouriteCities.reverse()}\n`)
