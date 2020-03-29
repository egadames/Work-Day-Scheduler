var $row = $('.row');
var $update = $('.col-2 time');
var $input = $('.col-8 input');
var $row = $('.col-2 update');

$(document).ready(function() {

for(i=0; i < 9; i++){
time(i);
input(i);
}

// The time function will create a p tag for the time block
function time(index){ 
    // Creates a p tag based on the provided index
    var pEl = $("<p>");
    // if statement that will check if in the morning or afternoon
    if(index <= 3){
    // if morning it will produce a string that contains "AM"
        pEl.text(index + 9 + "AM")
    }else{
    // if afternoon it will produce a string that contains "PM"
        pEl.text(index - 3 + "PM")
    }
    // Appends to class "col-2 time"
    $('#time').append(pEl);
}

// The checkTime function will compare each current time to
// the p tag created to identify if past, present, or future.

// The input function creates the text area in the calendar
function input(index){ 
// This will create an input tag for the user to enter events
// the index is assigned to a variable
var inputEl = $("<input>").attr("id", index);
// This is appended to class "col-8 input"
$('#input').append(inputEl);
// this returns the array so it can used globally
return(inputEl);
}

// The update function will create the updates buttons
function update(index){
// This creates the button with a data index attribute
var inputEl = $("<input>").attr("id", index);
// This creates the eventListener to the click
// updates the input value of the event activated
// The input will contain an input value and index number
// THe input is assigned to variable
// An array object is created containing both index or variable
}


// loads that event into local storage
// appends to the class "col-2 update"

console.log(inputEl)
// This function will create the rows 

});

