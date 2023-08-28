// 16: Add 3 more guests; one at start, one at middle & one at end
let guestList = ['Jawad', 'Mubashir','Shahjee'];

console.log(`------------------------------------------------------------------`)
console.log(`Guest List : [${guestList}]\n`);

guestList.unshift('Ahmad');
console.log(`Addition_of_guest_@_First : ${guestList[0]}`);

guestList.splice(2,0,'Waiz');
console.log(`Addition_of_guest_@_Middle ${guestList[2]}`);

guestList.push('Izhan');
console.log(`Addition_of_guest_@_Last ${guestList[5]}\n`);

console.log(`=================================================================`);
console.log(`New_Guest_List : [${guestList}]`)
console.log(`=================================================================\n`);

guestList.forEach((guest)=>{
    console.log(`Hello ${guest} ! Join us tonight at Dinner`);
});

console.log(`\n `);
console.log(`Hi! It is to inform all of you that we find a Big Dinnig Tabe 
for dinner, therefore inviting 3 more guests, the guest names are 
****[${guestList[0]},${guestList[2]} & ${guestList[5]}]**** \n`);
console.log(`------------------------------------------------------------------`)
export{}