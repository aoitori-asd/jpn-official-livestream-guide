/*
    written for jpn-official-livestream-guide's main.html page
*/

// On document ready
$(function(){
    // Format table
    $('#programs').DataTable({
        paging: false,
    });
    // Get JST time and update it every second
    $("#time-box").html("<p>"+ moment().tz('Asia/Tokyo').format('MM/DD') + "<br>" + moment().tz('Asia/Tokyo').format('hh:mma z') + "</p>");
    setInterval(function() {
        $("#time-box").html("<p>"+ moment().tz('Asia/Tokyo').format('MM/DD') + "<br>" + moment().tz('Asia/Tokyo').format('hh:mma z') + "</p>");
    }, 1000);
    // Add listeners to buttons
    // hide irregular, hide radio, hide tv, hide non-24hr
});