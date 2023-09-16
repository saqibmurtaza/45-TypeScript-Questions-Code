//15: replace a guest
let guestList = ['Jawad', 'Mubashir','Shahjee'];
let guestOut = guestList.splice(2,1,'Mutahar');
console.log(`\n`);
console.log(`Hello Friends it is to inform you that 
${guestOut} is out of city & he is not joining us tonight at dinner`);

console.log(`\n New_Guest_List : [${guestList}]`);

guestList.forEach((name)=>{
console.log(`\n Hello ${name} join us on tonight, dinner time - 8:00 pm\n`)
});

export{}
