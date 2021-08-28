console.log('***** Music Collection *****')
console.log('***** Music Collection *****')
console.log('***** Music Collection *****')
//------MUSIC coolection-------
//Create a variable `collection` that starts as an empty array.
const collection = [];

// Add a function named `addToCollection`. This function should:
// - Take in the album's `title`, `artist`, `yearPublished` as input parameters

function addToCollection(title, artist, yearPublished){
// - Create a new object having the above properties
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
}
// - Add the new object to the end of the `collection` array
collection.push(album);
// - Return the newly created object
return album;

}
// Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection('raggae music',  'kanye west',   1998));
console.log(addToCollection(' R&B music',  'chris brown',    1999));
console.log(addToCollection('country music',  'Ashley Monroe',2008));
console.log(addToCollection(' hip-hop music', 'kanye west',  2001));
console.log(addToCollection(' Pop music',  'Ariana Grande',  2005));
console.log(addToCollection('Rock music',  'Ariana Grande',   2002));

//- After all are added, console.log the `collection` array.
console.log(`the collection array:`, collection);

// Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.
function showCollection(array){
   // Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`
   //Console.log the number of items in the array.
    //console.log(array); 
    for(let i=0; i<collection.length; i++){
        console.log(`the number of items in an array: `, collection.length)
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`)
    }
  
}
console.log(showCollection(collection));

// Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter

function findByArtist(artist){
//- Create an array to hold any results, empty to start
const searchResult = [];
//Loop through the `collection` 
for(let i=0; i<collection.length; i++){
    //and add any objects with a matching artist to the array.
    if(collection[i].artist === artist){
        //Return the array with the matching results
      searchResult.push(collection[i]);
}
}
// If no results are found, return an empty array.
return searchResult
}

console.log(findByArtist('Ariana Grande'));

