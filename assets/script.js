var availableTags = [];  
var apiKey = "b9705267b2365b2bbc620b6ed43e5bcf"

$( function() { 
    $("#inputCity").autocomplete({
      source: availableTags
    });
});

$("inputCity").push(availableTags);

function onSubmit(event) {
  event.preventDefault()
  var userInput = $("#inputCity").val()
  console.log(userInput)
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=" + apiKey)
    .then(response => response.json())
    .then(data => console.log(data));
}

$(".submitBtn").click(onSubmit)