var axios = require("axios");
var moment = require("moment");

var Bands = function (){
    this.getband = function(artist){
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

        axios.get(URL).then(function(response){
            var jsonData = response.data;

            var concertData = [
                "Name of venue: " + jsonData.venue.name,
                "Venue location: " + jsonData.venue.city,
                "Date of the Event: " + moment(jsonData.datetime),
            ].join("\n\n");
        });
    }
}

Name of the venue

     * 

     *  (use moment to format this as "MM/DD/YYYY"