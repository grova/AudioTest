var Hammer, alert, console, Media;

function Test() {
    "use strict";
    var self = this;
    
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
            self.playMediaAudio();
        
        });
        $("#media_btn").on("mouseup", function () {
            console.log("up");
        });
        $("#ll_btn").on("mousedown", function () {
            console.log("down");
            self.playLLAudio();
        });
        
            

    }
    
    function onSuccess() {
        alert("media ok");
    }
    
    function onError(arg) {
        alert("media error " + arg);
    }
    
    this.playMediaAudio = function () {
        // Create Media object from src
        var src = "./sounds/WARP.WAV",
            my_media;
        
        my_media = new Media(src, onSuccess, onError);

        // Play audio
        my_media.play();

        // Update my_media position every second
        /*
        if (mediaTimer == null) {
            mediaTimer = setInterval(function() {
                // get my_media position
                my_media.getCurrentPosition(
                    // success callback
                    function(position) {
                        if (position > -1) {
                            setAudioPosition((position) + " sec");
                        }
                    },
                    // error callback
                    function(e) {
                        console.log("Error getting pos=" + e);
                        setAudioPosition("Error: " + e);
                    }
                );
            }, 1000);
        }
        */
    };
    
    this.playLLAudio = function () {
        var src = "./sounds/WARP.WAV",
            lla;
        
        if (window.plugins && window.plugins.LowLatencyAudio) {
            lla = window.plugins.LowLatencyAudio;

            // preload audio resource
            lla.preloadAudio(src, src, 1, function (msg) {
            }, function (msg) {
                console.log('error: ' + msg);
            });
            
            lla.play(src);
        } else {
            alert("no audio plugin");
        }
    };
    
    init();

}