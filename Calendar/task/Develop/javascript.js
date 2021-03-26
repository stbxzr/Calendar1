var nMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = $('#currentDay');
display.text(nMoment);

var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
$(".container").text(unixFormat);