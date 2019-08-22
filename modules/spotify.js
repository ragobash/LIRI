const cTable = require('console.table');
const error = require("./error.js");
const SpotifyAPI = require('node-spotify-api');
 
const spotify = new SpotifyAPI({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

function query(title) {

    if (title) {
        spotify.search({ type: 'track', query: title }).then(writeResults).catch(error);
    } else {
    
        console.log("The command 'spotify-this-song' requires one argument, none were passed.");
    }
}

function writeResults(response) {
    const data = response.tracks.items;

    if (!data || data.length === 0) {
        return console.log("Could not find any songs with the provided keyword.");
    }

    let output = [];

    for (let track of data) {
        
        let artists = [];

        for (let artist of track.artists) {
            artists.push(artist.name);
        }

        let obj = {
            Artist: artists.join(", ").trim(),
            Track: track.name,
            Album: track.album.name,
            Link: track.external_urls.spotify
        };

        output.push(obj);
    }

    console.log("--------------------------------");
    console.table(output);
    console.log("--------------------------------");
}

module.exports = {
    query: query
};