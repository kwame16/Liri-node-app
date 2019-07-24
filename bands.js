var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var divider = "\n------------------------------------------------------------\n\n";

var Bands = function (){
    this.getBand = function(artist){
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response){
            var jsonData = response.data[0];
            var date = moment(jsonData.datetime).format("MM/DD/YYYY");

            var concertData = [
                "Name of venue: " + jsonData.venue.name,
                "Venue location: " + jsonData.venue.city,
                "Date of the Event: " + date,
            ].join("\n\n");
            fs.appendFile("log.txt", concertData + divider, function(err){
                if(err){throw err;
                }
                console.log(concertData);
            });
        });
    };
};

module.exports = Bands