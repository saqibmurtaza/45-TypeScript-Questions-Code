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

// 16: Add 3 more guests; one at start, one at middle & one at end

console.log(`\n Guest List of Q15 : ${guestList}`);
guestList.unshift('Ahmad');
console.log(`\n The new list : [${guestList}] after the addition of guest ${guestList[0]}`);
guestList.splice(2,0,'Waiz');
console.log(`\n The new list : [${guestList}] after the addition of guest ${guestList[2]}`);
guestList.push('Izhan');
console.log(`\n The new list : [${guestList}] after the addition of guest ${guestList[5]}`);
console.log(`\n Hi! It is to inform all of you that we find a Big Dinnig Tabe \n for dinner, therefore inviting 3 more guests, the guest names are [${guestList[0]},${guestList[2]} & ${guestList[5]}] `)
guestList.forEach((guest)=>{
    console.log(`\n Hello ${guest} ! Join us tonight on Dinner`);
})

//17: Only 2 guests be on Dinner

console.log(`\n With regret, we have to invite only 2 Guests tonight because of Big-Dining-Table cancellation `)
let guestOutFromList = guestList.splice(2,4);
guestOutFromList.forEach((guest)=>{
    console.log(`\n Sorry Mr.${guest}, your invition for tonight dinner is \ncancelled because of Dining-Table-Booking cancellation`);
})
for(let guest of guestList){
    console.log(`\n We are happy to invite you Mr.${guest} on Dinner tonight`);
}
