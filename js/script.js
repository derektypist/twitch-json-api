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