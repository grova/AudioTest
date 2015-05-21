var Hammer, console;

function Test() {
    "use strict";
    var self = this;
    this.audioId = "sounds/dooo.wav";
    
    function init() {
        
        var el = $("#media_btn"),
            src,
            lla;
        
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
        
        
        $("#media_btn").on("touchstart", function (ev) {
            console.log("touchstart");
            ev.preventDefault();
            self.playMediaAudio();
        });
        $("#media_btn").on("touchend", function (ev) {
            console.log("touchend");
            ev.preventDefault();
        });
        
        $("#media_btn").on("mousedown", function () {
            console.log("down");
            self.playMediaAudio();
        
        });

        
        $("#ll_btn").on("touchend", function () {
            console.log("up");
            self.stopLLAudio();
        });
        
        
        $("#ll_btn").on("touchstart", function () {
            console.log("down");
            self.playLLAudio();
        });
        
        
        
        src = self.audioId;
        if (window.plugins && window.plugins.LowLatencyAudio) {
            lla = window.plugins.LowLatencyAudio;
            lla.preloadAudio(src, src, 1, function (msg) {
                console.log("ok");
            }, function (msg) {
                console.log('error: ' + msg);
            });
        }
    }
    
    function onSuccess() {
        alert("media ok");
    }
    
    function onError(arg) {
        alert("media error " + arg);
        console.log(arg);
    }
    
    this.playMediaAudio = function () {
        // Create Media object from src
        var src = "sounds/WARP.WAV",
            my_media;
        
        console.log("new media");
        
        my_media = new Media(src, onSuccess, onError);
        
        console.log("ok");
        console.log(my_media);

        // Play audio
        my_media.play();
        console.log("play");

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
        var src = self.audioId,
            lla;
        
        if (window.plugins && window.plugins.LowLatencyAudio) {
            lla = window.plugins.LowLatencyAudio;
            console.log("play");
            lla.play(src);
        } else {
            alert("no audio plugin");
        }
    };
    
    this.stopLLAudio = function () {
        var src = self.audioId,
            lla;
        
        if (window.plugins && window.plugins.LowLatencyAudio) {
            lla = window.plugins.LowLatencyAudio;
            console.log("play");
            lla.stop(src);
        } else {
            alert("no audio plugin");
        }
    };
    
    init();

}