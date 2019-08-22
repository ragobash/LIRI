require("dotenv").config();

let band = require("./modules/band.js")
let movie = require("./modules/movie.js");
let spotify = require("./modules/spotify.js");
let help = require("./modules/help.js");

const args = process.argv;

if (args.length <= 2) {
    console.log("Please enter a command to run, type '?' for help.");
    return;
}

let op = args[2].trim().toLowerCase();

let input;

if (op === "do-what-it-says") {
    const fs = require("fs");

    fs.readFile("random.txt", "utf8", (err, data) => {

        if (err) {
            return console.log(err);
        }

        const strArr = data.split("\n");

        const rnd = Math.floor(Math.random() * strArr.length);

        const splitIndex = strArr[rnd].indexOf(" ");

        op = strArr[rnd].substr(0, splitIndex).trim();
        input = strArr[rnd].substr(splitIndex + 1).trim();

        console.log(op + " " + input);

        liri(op, input);
    });
} else {
    input = args.slice(3).join('+').trim().toLowerCase();

    liri(op, input);
}

function liri(command, input) {
    switch (command) {
        case "movie-this":
            movie.query(input);
            break;
        case "concert-this":
            band.query(input);
            break;
        case "spotify-this-song":
            spotify.query(input);
            break;
        case "?":
            help.help();
            break;
        default:
            console.log("Unknown command (" + op + "), type '?' for help.");
            break;
    }
}