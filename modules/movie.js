const axios = require("axios");
const error = require("./error.js");

function query(title) {
    if (title) {
      
        let queryURL = `http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=3a49e7a7`;

        axios.get(queryURL).then(writeResults).catch(error);
    } else {

        console.log("The command 'movie-this' requires one argument, none were passed.");
    }
}

function writeResults(response) {
    const data = response.data;

    console.log("--------------------------------");
    console.log(`Title: ${data.Title}`);
    console.log(`Year: ${data.Year}`);

    for (let rating of data.Ratings) {
        if (rating.Source === "Internet Movie Database") {
            console.log(`IMDB Rating: ${rating.Value}`);
        } else if (rating.Source === "Rotten Tomatoes") {
            console.log(`RT Rating: ${rating.Value}`);
        }
    }
    
    console.log(`Country: ${data.Country}`);
    console.log(`Language: ${data.Language}`);
    console.log(`Plot: ${data.Plot}`);
    console.log(`Actors: ${data.Actors}`);
    console.log("--------------------------------");
}

module.exports = {
    query: query
};
