const cTable = require('console.table');
const axios = require("axios");
const moment = require("moment");
const error = require("./error.js");

function query(artist) {
    
    if (artist) {
      
        let queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;


        axios.get(queryURL).then(writeResults).catch(error);
    } else {

        console.log("The command 'concert-this' requires one argument, none were passed.");
    }
}

function writeResults(response) {
    const data = response.data;

    if (!data || data.length === 0) {
        return console.log("No upcoming events.")
    }

    let output = [];

    for (let event of data) {
      
        let obj = {
            Venue: event.venue.name,
            Location: `${event.venue.city}, ${event.venue.country}`,
            Date: moment(event.datetime, "YYYY-MM-DDTh:mm:ss").format("L")
        };

        output.push(obj);
    }

    console.table(output);
}

module.exports = {
    query: query
}