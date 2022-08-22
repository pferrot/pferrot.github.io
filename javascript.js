var counter = 0;
var max = 100000;

$(function() {
    addTextLoop();
});


function addTextLoop() {
    $("div#blabla").append("<span style=\"font-size: " + randomInt(6, 40) + "px\">pf80.ch </span>");
    counter++;
    if (counter < max) {
        setTimeout(addTextLoop, randomInt(100, 2000));
        //setTimeout(addTextLoop, randomInt(5, 5));
    } else {
        $("div#blabla").append("<span style=\"font-size: " + randomInt(6, 40) + "px\">...</span>");
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}