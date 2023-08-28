let users =['admin','Yasir','Awais','Jawad','Mubashir','Mansoor'];
let message30 = 'Hello !'
for(let name of users){
    if(name === 'admin'){
        message30 += `admin, would you like to see a status report?`
        
    }else{
        `${name} , thankyou for logging in again`
    }
}
console.log(message30);
