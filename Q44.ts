function sandwitch_summary(ingredients:string[]){
    console.log(`\nSandwitch Ingredients\n`);
    for(let i of ingredients){
        console.log(`${i}`);
    }    
        console.log(`\nSummary : Sandwitch ordered with ${ingredients.length} ingredients & `);
        console.log(`It makes a delicious Sandwitch, Good Luck !!`);
        console.log(`===========================================================`);      
}
sandwitch_summary(['egg','mayonese','cheese']);
sandwitch_summary(['beef','butter','sandwitch sauce','lettuce']);
sandwitch_summary(['chicken','mayonese','ketchup','lettuce','cucumbers']);