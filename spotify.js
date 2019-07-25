require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var request = require("request");


var spotify = new Spotify(keys.spotify);

// var Song = function(){
    getSpotify = function(song){
        console.log(song)
        if (song === undefined){
            song = "The Sign"
        }
        spotify.search({ type: 'track', query: song}, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data[0]); 
          });
    };
// };

getSpotify("the sign")