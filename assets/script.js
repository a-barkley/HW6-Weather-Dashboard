var availableTags = [];  

$( function() { 
    $("#inputCity").autocomplete({
      source: availableTags
    });
});

$("inputCity").push(availableTags);