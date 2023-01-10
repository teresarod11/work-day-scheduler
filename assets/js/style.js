// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// variables that are needed
var btnSave = $('.saveBtn');
var timeTracker = $('.time-block');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function(){
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    btnSave.on("click", function (event) {
        event.preventDefault();
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
       localStorage.setItem(time, value);
       console.log(event);
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function timeTracker(){
        var currentTime = moment().hour();
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $("#hour-9 .description").val(localStorage.getItem("hr9"));
    $("#hour-10 .description").val(localStorage.getItem("hr10"));
    $("#hour-11 .description").val(localStorage.getItem("hr11"));
    $("#hour-12 .description").val(localStorage.getItem("hr12"));
    $("#hour-1 .description").val(localStorage.getItem("hr1"));
    $("#hour-2 .description").val(localStorage.getItem("hr2"));
    $("#hour-3 .description").val(localStorage.getItem("hr3"));
    $("#hour-4 .description").val(localStorage.getItem("hr4"));
    $("#hour-5 .description").val(localStorage.getItem("hr5"));
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs(today).format('dddd, MMMM DD, YYYY, h:mm:ss a'); 
    $('#currentDay').text(today);
});