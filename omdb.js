var axios = require("./axios");
var fs = require("fs");

var divider = "\n------------------------------------------------------------\n\n";

var Movies = function(){
    this.getMovie = function(title){
        var URL = "http://www.omdbapi.com/?apikey=" + "trilogy" + 
        "&" + title;

        axios.get(URL).then(function(response){
            var apiData = 
        })

    }
}