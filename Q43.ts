let magicians = ['Tim','John','Chris'];

function show_magicians(arr:string[]){
    console.log(arr);
}
function makeACopy(arr:string[]){
    let copyArray = Array.from(magicians);
    return copyArray;
}
function make_great(arr:string[]){
    for(let i=0; i<arr.length; i++){
        arr[i] = `The Great ${arr[i]}`;
    }
    console.log(arr);
}

let copyArray = makeACopy(magicians);
make_great(copyArray);
show_magicians(magicians);
