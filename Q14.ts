/*Guest List: If you could invite anyone, living or 
deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, 
inviting them to dinner. */
let guestList = ['Jawad', 'Mubashir','Shahjee'];
for(let name of guestList){
    console.log(`Dear ${name} join us on dinner`)
}
//15: replace a guest
let guestOut = guestList.splice(2,1,'Mutahar');
console.log(`\n Hello Friends it is to inform you the ${guestOut} is out of city & he is not joining us tonight`)
console.log(`\n New Guest List : ${guestList}`)
guestList.forEach((name)=>{
    console.log(`\n Hello ${name} join us on tonight, dinner time - 8:00 pm`)
})