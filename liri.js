require("dotenv").config();
var keys = require("./keys.js");
var Bands = require("./bands.js");
var songs = require("./spotify.js");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var band = new Bands();

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

if (command === "concert-this"){
    console.log("it went through here")
    band.getBand(userInput);
}
else if(command === "spotify-this-song"){
    console.log("it went through here1")
}
else if(command === "movie-this"){
    console.log("it went through here2")
}
else if(command === "do-what-it-says"){
    console.log("it went through here3")
}
else{
    console.log("default")
}
