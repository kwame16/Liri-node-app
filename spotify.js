require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var request = require("request");

var divider = "\n------------------------------------------------------------\n\n";


var spotify = new Spotify(keys.spotify);

var Spotify = function(key){
 
    this.getSpotify = function(song){
        console.log(song)
        if (!song){
            song = "The Sign Ace of Base"
        }
        spotify.search({ type: 'track', query: song}, function(err, response) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
        //   console.log(response.tracks.items[0].external_urls.spotify); 
        //   console.log(response.tracks.items[0].artists[0]);

          var songString =[
            "Artist: " + response.tracks.items[0].artists[0].name,
            "Song Title: " + response.tracks.items[0].name,
            "Preview Link: " + response.tracks.items[0].preview_url,
            "Album Title: " + response.tracks.items[0].album.name,
        ].join("\n\n");
        fs.appendFile("log.txt", songString + divider, function (err) {
            if (err) throw err;
            console.log(songString)
        });
      });
    };
};

// getSpotify("the sign")

module.exports = Spotify;