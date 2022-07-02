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
console.log('Collection', collection);

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
