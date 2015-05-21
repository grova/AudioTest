var Hammer;

function Test() {
    "use strict";
    
    function init() {
        
        var el = $("#media_btn");
        
        /*
        var hammertime = new Hammer(el[0]);
        hammertime.on('touchstart', function (ev) {
            //console.log(ev);
            console.log("start");
        });
        hammertime.on("hammer.input", function (ev) {
            console.log(ev);
            ev.srcEvent.stopPropagation();
        });
        */
        
        /*
        $("#media_btn").on("click", function () {
            console.log("click");
        });
        $("#ll_btn").on("click", function () {
            alert("ll");
        });
        
        $("#media_btn").on("mouseup", function () {
            console.log("up");
        });
        */
        
        $("#media_btn").on("touchstart", function (ev) {
            console.log("touchstart");
            ev.preventDefault();
        });
        $("#ll_btn").on("click", function () {
            alert("ll");
        });
        $("#media_btn").on("touchend", function (ev) {
            console.log("touchend");
            ev.preventDefault();
        });
        $("#media_btn").on("mousedown", function () {
            console.log("down");
        });
        $("#media_btn").on("mouseup", function () {
            console.log("up");
        });
        
            

    }
    
    init();

}