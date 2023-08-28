function make_album(artistName:string,albumTitle:string){
    let object = {
        artist : artistName, 
        album : albumTitle
    }
    return object
}
console.log(make_album('Atif Aslam','Mausam'));

console.log('\n_________Modify to add optional parameter track______________\n')

function make_album_track(artistName:string,albumTitle:string,track?:number){
    let object = {
        artist : artistName, 
        album : albumTitle,
        track : track
    }
    
    return object
}
let album1 = make_album_track('Aatif Aslam', 'Mausam');
let album2 = make_album_track('Ali Zafar', 'Janoon');
let album3 = make_album_track('Aatif Aslam', 'Mausam', 15);
console.log(album1);
console.log(album2);
console.log(album3);