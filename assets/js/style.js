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

// function that wraps around everything 
$(function(){ 
// this function helps display the time onto the calendar
    function displayTime() {
        var currentDay = $('#currentDay'); 
        var rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm A');
        currentDay.text(rightNow);
      }
    //this click function lets the user click on the save button and targets the users input to set in localstorage.
    btnSave.on("click", function (event) {
        event.preventDefault();
        var value = $(this).siblings('.description').val();
        console.log(value)
        var time = $(this).parent().attr('id');
       localStorage.setItem(time, value);
       console.log(event);
    });
    // this makes sure that each text area block is stored into the local storage
    $("#hour-09 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
//   this makes sure to target each time block and loops through the color-coding from past(grey), present(red), and future (green).
   $('.time-block').each(function(){
    var block = $(this).attr('id').split('-')[1]; //this targets only the number element
    // console.log(block);
    var time = dayjs().format('HH');
    // console.log(time);
    if (block===time) {
        $(this).addClass('present');
    } else if (block<time) {  
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    }
        });

    displayTime();

    }); 
    