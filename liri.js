require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

if (command === "concert-this"){
    console.log("it went through here")
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
