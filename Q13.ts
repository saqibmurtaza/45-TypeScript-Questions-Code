import { it } from "node:test";

/*Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several 
examples. Use your list to print a series of statements about 
these items, such as “I would like to own a Honda motorcycle.”*/
let myArray = ['Honda','Civic', 'City','Accord'];
myArray.forEach((item)=>{
    switch(item){
        case 'Honda':
            console.log(`${item}; the name of Style & Comfort in Luxury Cars`)
            break;
        case 'Civic':
            console.log(`I love ${item}`);
            break;
        case 'City':
            console.log(`${item} New Model is Awesome`)
            break;
        case 'Accord':
            console.log(`${item} No match in Style & Comfort`)
    }
})