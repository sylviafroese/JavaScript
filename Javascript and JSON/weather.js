/*
	weather.js
	Load the weather.json file
	Grab the relevant values from the JSON and create HTML 
	DOM elements that will display the information.

	Alan Simpson
	08.05.2018
*/

//	Add the event listener to run when the page is loaded
document.addEventListener("DOMContentLoaded",load);

function load(){

    loadJSON(function(response) {
        // Parse JSON string into object
        weatherData = JSON.parse(response);
        console.log(weatherData.length);
        createWeather(weatherData);
    });
}

//	Loop through the cities in the JSON
//	Build a section, h1, ul and lis for each city
function createWeather(weatherData){

}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'weather.json', true);

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    }
    xobj.send(null);  
}
















