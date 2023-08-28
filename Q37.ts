function make_shirt(size:string, message:string){
    size = size.toLowerCase();
    if(size === 'large' || size === 'medium'){
    console.log(`${size} , ${'I love TS'}`)
}else if(size === 'small'){
    console.log(`${size} , ${'Beautiful Shirt'}`)
}
else{
    console.log(`${size} , ${'In valid size'}`)
}
}
make_shirt('small','');