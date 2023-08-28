import exp from "constants";

let magicians = ['Tim','John','Chris'];
function show_magicians(magiciansarray:string[]){
    console.log(magiciansarray);
}
function make_great(magiciansarray:string[]){
    for (let i = 0; i < magiciansarray.length; i++) {
        magiciansarray[i] = "the Great " + magiciansarray[i];
    }
        
}
make_great(magicians);
show_magicians(magicians);
export{};
