//17: Only 2 guests be on Dinner
let New_Guest_List = ['Ahmad','Jawad','Waiz','Mubashir','Shahjee','Izhan'];

console.log(`------------------------------------------------------------------\n`)
console.log(`******* BOOKING CANCELLATION******\n`);
console.log(`Only Two Guests be Invited tonight for Dinner because of mentioned issue `);

let guestOutFromList = New_Guest_List.splice(2,4);
guestOutFromList.forEach((guest)=>{
    console.log(`Sorry Mr.${guest}, Invitation Cancelled for tonight Dinner`);
});

console.log(`\n`);

for(let guest of New_Guest_List){
    console.log(`We are happy to invite you Mr.${guest} at Dinner tonight`);
};
console.log(`------------------------------------------------------------------`);
