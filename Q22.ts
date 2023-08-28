let countries = {
    names: ['Newzealand', 'America', 'Australia', 'Japan', 'England']
};

let index = 2;
try {
    let country = countries.names[index];
    if (country === undefined ) {
        throw new RangeError('It is a RangeError');
    }
    console.log(`Selected country is : ${country}`);
} catch (e) {
    if (e instanceof RangeError) {
        console.log(`Check Index. It should be RangeError`);
    }
}
