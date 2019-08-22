function help() {
    console.log("");
    console.log("--------------------------------");
    console.log("");

// Movie-this command
    console.log("movie-this [title]");
    console.log("Return: Movie Title, Release Year, Ratings, Country, Language, Plot, and Actors");

    console.log("");
    console.log("--------------------------------");
    console.log("");

// Concert-this command
    console.log("concert-this [artist]");
    console.log("Return: List of upcoming Venues, Locations, and Dates");

    console.log("");
    console.log("--------------------------------");
    console.log("");

// Spotify-this-song command
    console.log("spotify-this-song [title]");
    console.log("Return: List of all songs with Artist, Name, Album, and Spotify Link");

    console.log("");
    console.log("--------------------------------");
    console.log("");

// Do what it says
    console.log("do-what-it-says");
    console.log("Return: Result of a random command");

    console.log("");
    console.log("--------------------------------");
    console.log("");
}

module.exports = {
    help: help
};
