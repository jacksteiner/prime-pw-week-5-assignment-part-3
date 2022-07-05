console.log('***** Music Collection *****')

collection = []

const albumOne = {
    title: 'Virga I',
    artist: 'Eluvium',
    yearPublished: 2020,
}

function addToCollection(title, artist, yearPublished) {
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newAlbum);
};

addToCollection('Virga I', 'Eluvium', 2020);
console.log('Adding to Collection..', collection);

const albumTwo = {
    title: 'Forever',
    artist: 'Joy Again',
    yearPublished: 2014,
}

const albumThree = {
    title: 'Dummy',
    artist: 'Portishead',
    yearPublished: 1990,
}

const albumFour = {
    title: 'Graduation',
    artist: 'Kanye West',
    yearPublished: 2007,
}
const albumFive = {
    title: 'Public Strain',
    artist: 'Women',
    yearPublished: 2010,
}

const albumSix = {
    title: 'RKS',
    artist: 'Rainbow Kitten Suprise',
    yearPublished: 2015,
}

addToCollection('Forever', 'Joy Again', 2014);

addToCollection('Dummy','Portishead',1990);

addToCollection('Graduation','Kanye',2007);

addToCollection('Public Strain','Women',2010);

addToCollection('RKS','Rainbow Kitten Suprise',2015);

console.log('Adding to Collection..', collection);

function showCollection (collectionInput){
    console.log(collectionInput.length);
    for (let i=0; i<collectionInput.length; i++){
        let album = collectionInput[i];
       // console.log('Item' , album);
        console.log(album.title + ' by ' + album.artist + ' published in ' + album.yearPublished);
    }
}
showCollection(collection);




// console.log('in the function');
//     console.log(arrayInput(collection.length));
