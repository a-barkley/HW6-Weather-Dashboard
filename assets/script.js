 var apiKey = "b9705267b2365b2bbc620b6ed43e5bcf"

var latitude 
var longitude
var loc
var temperature
var humidity
var windspeed
var uvIndex


function onSubmit(event) {
  event.preventDefault()

  userInput = $("#inputCity").val()
  
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
            $("#container").addClass("card")
            $(".location").text(loc)
            $(".date").text(moment().format("[(]M[/]D[/]YYYY[)]"))
            $(".temp").text("Temperature: " + temperature)
            $(".humidity").text("Humidity: " + humidity)
            $(".windSpeed").text("Wind Speed: " + windspeed)
            $(".uvIndex").text("UV Index: " + uvIndex)
          })
    })
}         

$(".submitBtn").click(onSubmit)