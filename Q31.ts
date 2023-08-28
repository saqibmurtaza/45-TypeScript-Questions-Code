let username =['admin','Yasir','Awais','Jawad','Mubashir','Mansoor'];
let message31 = '';
if(username.length !== 0){
    message31 = `\nList is not empty
    "Okay! Next command in 
    Code will delete the list `;
    
}
let count = username.length;
let deletedNames = username.splice(0,count)

if(username.length === 0){
    message31 += `\n Checking !!! List of Username = [${username}] 
    Oh! Now It's an Empty List... 
    Names Deleted from List = [${deletedNames}]
    " Now username List is Empty therefore."
    " We need to find some users " `;
}
console.log(message31);