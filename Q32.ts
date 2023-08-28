let current_users = ['Jawad', 'Khaliq', 'Saqib', 'Murtaza','Mubashir', 'Mansoor'];
let new_users = ['Waiz', 'Ahmad', 'Izhan', 'Saqib', 'Jawad'] 

for(let newuser of new_users){
let finduser = false; 

    for(let currentuser of current_users){
       if (newuser === currentuser){
            console.log(`${newuser} already exist, enter new username`);
            finduser = true;
            break;
        }
    }
    if(!finduser){
        console.log(`${newuser}, username available`)
    }
    
}
export {}

