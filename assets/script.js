var availableTags = [];  

var apiKey = "b9705267b2365b2bbc620b6ed43e5bcf"

var latitude 
var longitude
var loc
var temperature
var humidity
var windspeed
var uvIndex


// $( function() { 
//     $("#inputCity").autocomplete({
//       source: availableTags
//     });
// });

function onSubmit(event) {
  event.preventDefault()

  // $("inputCity").push(availableTags);
  userInput = $("#inputCity").val()
  console.log(userInput)

  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=" + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      loc = data[0].name
      latitude = data[0].lat
      longitude = data[0].lon
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial")
          .then(function (response) {
            return response.json();
         })
          .then(function (data) {
            console.log(data);
            temperature = data.current.temp
            humidity = data.current.humidity
            windspeed = data.current.wind_speed
            uvIndex = data.current.uvi
            console.log(temperature)
            console.log(humidity)
            console.log(windspeed)
            console.log(uvIndex)
            console.log(loc)
            $(".location").text(loc)
            
          })
    })
  
  
  
  
  
}         

$(".submitBtn").click(onSubmit)