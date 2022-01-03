/*
    written for jpn-official-livestream-guide's main.html page
*/

// On document ready
$(function(){
    // Format table
    $('#programs').DataTable({
        paging: false,
    });
    // Get JST time
    $("#time-box").html(moment().tz('Asia/Tokyo').format('MM/DD') + "<br>" + moment().tz('Asia/Tokyo').format('h:ma z') + "JST");
});