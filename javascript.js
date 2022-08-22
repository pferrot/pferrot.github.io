var counter = 0;
var max = 100000;

$(function() {
    restart();
});


function addTextLoop() {
    if ($("div.blabla").height() > window.innerHeight) {
        $("div.blabla").remove();
        $("body").html("<div class=\"centeredParent\"><div class=\"centeredChild\">pf80.ch</div></div>");
        setTimeout(restart, 5000);
    }
    else {
        $("div.blabla").append("<span style=\"font-size: " + randomInt(6, 40) + "px\">pf80.ch </span>");
        setTimeout(addTextLoop, randomInt(1, 10));
    }
}

function restart() {
    $("div.centeredParent").remove();
    $("div.blabla").remove();
    $("body").html("<div class=\"blabla\"></div>");
    addTextLoop();
}

function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}