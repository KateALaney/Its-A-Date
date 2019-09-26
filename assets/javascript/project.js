$(document).ready(function () {

// Create an on-click function to start the AJAX call.
$(document).on("click", "#zip-code-btn", function() {
    title = "";
    //var queryURL = "https://api.seatgeek.com/2/events?client_id=MTQyMDg2OTJ8MTU2OTA2Njc3MC40NQ&geoip=" + zipCode + "&range=15mi";
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + zipCode + "&by_state=" + dateInput;
    
    
// AJAX call for SeatGeek.
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response) { // Create a function to pull the responses to the AJAX call.
    console.log(response);

    for(var i = 0; i < response.events.length; i++){
      console.log(response.events[i]);
      
      var titleResults = response.events[i].title;
      var dateResults = response.events[i].datetime_local;
      var typeResults = response.events[i].type;
      var venueResults = response.events[i].venue.name;
      var priceResults = response.events[i].stats.average_price;
      var urlResults = response.events[i].url;
      console.log(dateResults);
      console.log(typeResults);
      console.log(venueResults);
      console.log(priceResults);
      console.log(urlResults);

    // Create a series of divs to hold and display the results in the HTML.
    var titleDiv = $("<div>");
    var titleButton = $("<button>").text(titleResults);
    titleButton.attr("class", "titlebtn");
    titleDiv.append(titleButton);
    $("#event-box").append(titleDiv);

    $(".titlebtn").on("click", function() {
      var dateDiv = $("<div>");
      var dateP = $("<p>").text("Date: " + dateResults);
      dateDiv.append(dateP);
      $("#event-detail").append(dateDiv)
    });
  }
    
    
  
  });
  
});

// Create a function to store user input data.
$("#zip-code-btn").on("click", function(event) {
  event.preventDefault();
  zipCode = $("#zip-code-input").val().trim();
  dateInput = $("#date-input").val().trim();
  console.log(zipCode);
  console.log(dateInput);
})





/* Create a variable to store the date input.
var date = moment(val().dateInput, )*/
});