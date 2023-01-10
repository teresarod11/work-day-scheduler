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


$(function(){ 
    
    var today = dayjs(today).format('dddd, MMMM DD, YYYY, h:mm:ss a'); 
    $('#currentDay').text(today);

    btnSave.on("click", function (event) {
        event.preventDefault();
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
       localStorage.setItem(time, value);
       console.log(event);
    });

     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    function timeTracker(){  
    var currentTime = $('.time-block');
    
    console.log(currentTime);
   
    var a = currentTime.attr('id').substring(5);
    console.log(currentTime.attr('id').substring(5));
    var b = dayjs('today').format('HH MM');

    if (a<b) {
        currentTime.addClass('past');
    } else if (a===b) {  
        currentTime.addClass('present');
    } else {
        currentTime.addClass('future');
    }
    }
   timeTracker();
});

// retrieve id 
