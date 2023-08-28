let array = [1,2,3,4,5,6,7,8,9];

for(let arr of array){
    let message ="";
    if(arr ===1){
        message = `${arr}st`
    }else if(arr === 2){
        message = `${arr}nd`
    }else if(arr === 3){
        message = `${arr}rd`
    }else{
        message = `${arr}th `
    }
    console.log(message);
}
