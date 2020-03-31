$(document).ready(function() {
    let inputArray          = [];
    let inputVal            = "";
    let buttonIndex         = "";
    // let operator            = "";
    // let result              = "";

for(i=0; i < 9; i++){
time(i);
// console.log(inputVal);
input(i);
update(i);
}

// The input function creates the text area in the calendar
function input(index){ 
    // This will create an input tag for the user to enter events
    // the index is assigned to a variable
    var pEl = $("<p>").addClass("col-2 hour");
    // This is appended to class "col-8 input"
    $('#input').append(inputEl);
    // Th
    var inputVal = inputEl.val();
    // this returns the array so it can used globally
    return(inputVal);
}

// The update function will create the updates buttons
function update(index){
    // THis creates th
    // var inputArray = [];
    // This creates the button 
    var buttonEl = $("<button>")
    // This creates a data index for each button created
    buttonIndex = buttonEl.attr("id", index)
    // THis add the text inside the button
    buttonEl.text('Update');

    // This creates the eventListener to the click

    // updates the input value of the event activated
    // The input will contain an input value and index number
    // THe input is assigned to variable
    // An array object is created containing both index or variable

    // loads that event into local storage

    // appends to the class "col-2 update"
    $('#update').append(buttonEl)

    return(buttonIndex);
    // console.log(inputEl)
    // This function will create the rows 
    }
});

buttonIndex.on("click", function(){
    inputArray += inputVal;
})




// The time function will create a p tag for the time block
function time(index){ 
    // Creates a p tag based on the provided index
    var pEl = $("<p>");
    // if statement that will check if in the morning or afternoon
    if(index <= 12){
    // if morning it will produce a string that contains "AM"
        pEl.text(index + "AM")
    }else{
    // if afternoon it will produce a string that contains "PM"
        pEl.text(index - 12 + "PM")
    }
}

    // Appends to class "col-2 time"
    $('#time').append(pEl);
// The checkTime function will compare each current time to
function checkTime(index){
    console.log("do Something")
}

// the p tag created to identify if past, present, or future.
