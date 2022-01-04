/*
    written for jpn-official-livestream-guide's main.html page
*/

var table, radioOn, tvOn, only24, irregularOn, sRadTV, sO24, sIrr;

// Redraw table with new search filter
function redrawTable() {
    if (irregularOn == false && sO24 == false) {
        table.column("5").search(sRadTV).column("3").search(sIrr, true, false).draw();
    } else {
        table.column("5").search(sRadTV).column("3").search(sO24).draw();
    }
}

// On document ready
$(function(){
    // Format table and make reference var
    table = $('#programs').DataTable({
        paging: false,
    });
    // Get JST time and update it every second
    $("#time-box").html("<p>"+ moment().tz('Asia/Tokyo').format('MM/DD') + "<br>" + moment().tz('Asia/Tokyo').format('hh:mma z') + "</p>");
    setInterval(function() {
        $("#time-box").html("<p>"+ moment().tz('Asia/Tokyo').format('MM/DD') + "<br>" + moment().tz('Asia/Tokyo').format('hh:mma z') + "</p>");
    }, 1000);
    // Set default toggle values
    radioOn = tvOn = irregularOn = true;
    only24 = false;
    sRadTV = sO24 = sIrr = "";
    // Add listeners to buttons
    $('#toggleTV').click(function(e) {
        if (tvOn) { // Hide TV
            sRadTV = "Radio";
            $('#toggleTV').html("Show TV");
            $('#toggleRadio').html("Hide Radio");
            redrawTable();
            tvOn = false;
            radioOn = true;
        } else { // Show TV
            sRadTV = "";
            $('#toggleTV').html("Hide TV");
            redrawTable();
            tvOn = true;
        }
    });
    $('#toggleRadio').click(function(e) {
        if (radioOn) { // Hide radio
            sRadTV = "TV";
            $('#toggleTV').html("Hide TV");
            $('#toggleRadio').html("Show Radio");
            redrawTable();
            tvOn = true;
            radioOn = false;
        } else { // Show radio
            sRadTV = "";
            $('#toggleRadio').html("Hide Radio");
            redrawTable();
            radioOn = true;
        }
    });
    $('#toggleNon24').click(function(e) {
        if (!only24) { // Show 24hr only
            sO24 = "24hr";
            $('#toggleNon24').html("Show Non-24hr");
            only24 = true;
            redrawTable();
        } else { // Show all
            sO24 = "";
            $('#toggleNon24').html("Hide Non-24hr");
            only24 = false;
            redrawTable();
        }
    });
    $('#toggleIrregular').click(function(e) {
        if (irregularOn) { // Hide irregular
            sIrr = "^(?!.*Irregular).*$";
            $('#toggleIrregular').html("Show Irregular");
            irregularOn = false;
            redrawTable();
        } else { // Show irregular
            sIrr = "";
            $('#toggleIrregular').html("Hide Irregular");
            redrawTable();
            irregularOn = true;
        }
    });
});