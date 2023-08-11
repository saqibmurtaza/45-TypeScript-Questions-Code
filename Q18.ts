import { clearScreenDown } from "readline";

// favourity cities to visit
let favouriteCities = ['Toronto','Newyork','London','Scotland','Netherland'];
console.log(`\nOriginal Array : [${favouriteCities}]`);
let copyOfFavouriteCities = favouriteCities.slice(0,5)
console.log(`\nList in Alaphabatical Order [${copyOfFavouriteCities.sort()}]`);
console.log(`\nReverse of Alphabatical order List : [${copyOfFavouriteCities.reverse()}]`)
console.log(`\nConfirmation_Print of Original Array : [${favouriteCities}]`);
console.log(`\nReverse Order of Original Array : [${favouriteCities.reverse()}]`);
console.log(`\nBack to Original Array : [${favouriteCities.reverse()}]\n`);
console.log(`Original Array in Alphabatical order : [${favouriteCities.sort()}]`);
console.log(`\nOriginal Array in Reverse order : ${favouriteCities.reverse()}\n`)