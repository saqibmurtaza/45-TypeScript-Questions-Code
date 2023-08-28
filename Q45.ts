function yourCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]) {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    }

    for (let arg of args) {
        for (let key in arg) {
            car[key] = arg[key];
        }
    }

    return car;
}

let myCar = yourCar('Toyota', '2020', { 'color': 'blue' },{'kits':2});
console.log(myCar);


