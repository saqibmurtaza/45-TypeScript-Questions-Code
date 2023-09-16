let myArray = ['Honda','Civic', 'City','Accord'];
myArray.forEach((item)=>{
    switch(item){
        case 'Honda':
            console.log(`======================================================`)
            console.log(`\nI love ${item}; `)
            break;
        case 'Civic':
            console.log(`${item}, The name of Style & Comfort in Luxury Cars `);
            break;
        case 'City':
            console.log(`${item}, It's New Model is Awesome`)
            break;
        case 'Accord':
            console.log(`${item}, No match in Style & Comfort\n`)
            console.log(`======================================================`)
    }
})
