$(document).ready(function() {
    // Set Up Channels Array
    let channels = ["ESL_SC2","OgamingSC2","cretetion",
    "freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas"];

    getChannelInfo();

    // Function to Get Channel Information
    function getChannelInfo() {
        channels.forEach(function(channel) {
            function makeURL(type,name) {
                return `https://twitch-proxy.freecodecamp.rocks/twitch-api/${type}/${name}?callback=?`;
            };
            // GET JSON for Streams 
            $.getJSON(makeURL("streams",channel), function(data) {
                let game,status;
                if (data.stream === null) {
                    game = "Offline";
                    status = "offline";
                } else if (data.stream === undefined) {
                    game = "Account Closed";
                    status = "offline";
                } else {
                    game = data.stream.game;
                    status = "online";
                }
            });

            // GET JSON for Channels
            $.getJSON(makrURL("channels",channel), function(data) {
                
            });

        });
    }

    // Clicks on Buttons
    $('.online').click(function() {
        $('.players-online').show();
        $('.players-offline').hide();
    });

    $('.offline').click(function() {
        $('.players-online').hide();
        $('.players-offline').show();
    });

    $('.all').click(function() {
        $('.players-online').show();
        $('.players-offline').show();
    });



});